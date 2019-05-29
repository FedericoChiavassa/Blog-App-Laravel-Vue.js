<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    // Relationship between Post and User model as many-to-one.
    public function user()
    {
      return $this->belongsTo(User::class);
    }
}
