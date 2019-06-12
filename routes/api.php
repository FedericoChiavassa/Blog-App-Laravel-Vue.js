<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// List posts
Route::get('posts', 'PostController@index');

// List single post
Route::get('posts/{id}', 'PostController@show');

// Register new user
Route::post('register', 'Auth\RegisterController@register');

// Login user
Route::post('login', 'Auth\LoginController@login');

// Get user info
Route::get('auth/user', 'Auth\LoginController@getUser');

// Protected routes
Route::group(['middleware' => 'auth:api'], function() {    
    
    // User posts
    Route::get('user/posts', 'PostController@userPosts');
    
    // Logout user
    Route::get('logout', 'Auth\LoginController@logout');
    
    // Create new post
    Route::post('posts', 'PostController@store');

    // Update post
    Route::put('posts/{id}', 'PostController@update');

    // Delete post
    Route::delete('posts/{id}', 'PostController@destroy');


});