<?php

use Illuminate\Database\Seeder;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Clears existing posts
        DB::table('posts')->truncate();
        
        // Creates new posts
        factory(App\Post::class, 30)->create();
    }
}
