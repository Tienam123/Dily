<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::post('/register', [\App\Http\Controllers\Auth\RegisteredUserController::class, 'store'])->name('auth.register');
Route::post('/login', [\App\Http\Controllers\Auth\RegisteredUserController::class, 'login'])->name('auth.login');
Route::post('/me', [\App\Http\Controllers\Auth\RegisteredUserController::class, 'me'])->middleware('auth:sanctum')->name('auth.me');
Route::post('/refresh', [\App\Http\Controllers\Auth\RegisteredUserController::class, 'refresh'])->middleware('auth:sanctum')->name('auth.refresh');
Route::post('/logout', [\App\Http\Controllers\Auth\RegisteredUserController::class, 'logout'])->middleware('auth:sanctum')->name('auth.logout');

