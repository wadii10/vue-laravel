<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $fillable = ["nomcategory", "imagecategory"];

    public function scategories() {
        return $this->hasMany(Scategories::class, "categorieID");
    }
}
