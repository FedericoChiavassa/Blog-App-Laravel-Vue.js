<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SinglePageController extends Controller
{
    // Needed for vue-router to work properly
    public function index() {
        return view('welcome');
    }
}
