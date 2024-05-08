<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::post('/send-email', 'App\Http\Controllers\EmailController@sendEmail');

require __DIR__.'/auth.php';
