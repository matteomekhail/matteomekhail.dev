<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\EmailController;

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::post('/send-email', [EmailController::class, 'sendEmail']);


require __DIR__.'/auth.php';
