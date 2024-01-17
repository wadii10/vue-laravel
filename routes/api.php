<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ScategoryController;
use App\Http\Controllers\ArticleController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('api')->group(function () {
    Route::resource('categories', CategoryController::class);
});

Route::middleware('api')->group(function () {
    Route::resource('scategories', ScategoryController::class);
});

Route::get('/scat/{idcat}', [ScategoryController::class,'showSCategorieByCAT']);

Route::middleware('api')->group(function () {
    Route::resource('articles', ArticleController::class);
});