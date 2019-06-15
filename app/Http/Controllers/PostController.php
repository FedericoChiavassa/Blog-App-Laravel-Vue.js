<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Post;
use App\Http\Resources\Post as PostResource;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Get posts
        $posts = Post::orderBy('created_at', 'desc')->paginate(5);

        // Return collection of posts as a resource
        return PostResource::collection($posts);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Store new post
        $post = new Post;

        $post->title = $request->input('title');
        $post->body = $request->input('body');
        $post->user_id = Auth::guard('api')->user()->id;

        if($post->save()) {
            return new PostResource($post);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // Get post
        $post = Post::findOrFail($id);

        // Return single post as a resource
        return new PostResource($post);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // Find post to update
        $post = Post::findOrFail($id);

        // Check for correct user
        if(auth()->user()->id === $post->user_id) {
            $post->title = $request->input('title');
            $post->body = $request->input('body');
        } 

        if($post->save()) {
            return new PostResource($post);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // Find post to delete
        $post = Post::findOrFail($id);

        // Check for correct user
        if(auth()->user()->id === $post->user_id) {
            if($post->delete()) {
                return new PostResource($post);
            }
        }
    }

    /**
     * Display user posts.
     *
     * @return \Illuminate\Http\Response
     */
    public function userPosts(Request $request)
    {
        $user = Auth::guard('api')->user();

        $posts = $user->posts->sortByDesc('created_at');

        return PostResource::collection($posts);
    }
}
