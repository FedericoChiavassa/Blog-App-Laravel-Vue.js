<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Post;
use App\Http\Resources\Post as PostResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;

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
        
        if ($request->file('image')) {
            $imageName = $this->saveImage($request);
        }
        else {
            $imageName = "noimage.jpg";
        }

        $post->image = $imageName;

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
            if($post->image !== "noimage.jpg") {
                $imagePath = 'images/' . $post->image;
                $this->removeImage($imagePath);
                if($post->delete()) {
                    return new PostResource($post);
                }
            }
            else {
                if($post->delete()) {
                    return new PostResource($post);
                }
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

    /**
     * Upload image
     *
     * @return \Illuminate\Http\Response
     */
    public function saveImage(Request $request)
    {
        request()->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        if ($image = $request->file('image')) {
            $destinationPath = 'images/';
            $imageName = date('YmdHis') . $image->getClientOriginalName();
            $image->move($destinationPath, $imageName);
            
            return $imageName;
        }
        else {
            return "noimage.jpg";
        }
    }

    /**
     * Remove image
     *
     * @return \Illuminate\Http\Response
     */
    public function removeImage($imagePath)
    {
        if(File::exists($imagePath)) {
            File::delete($imagePath);
        }
        return true;
    }
}
