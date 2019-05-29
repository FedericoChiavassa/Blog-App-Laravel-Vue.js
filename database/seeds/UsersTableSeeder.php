<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Clears existing users
        DB::table('users')->truncate();
        
        // Creates new users
        factory(App\User::class, 5)->create();
    }
}
