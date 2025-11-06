<?php
use App\Http\Controllers\Api\AttendanceController;

Route::get('/employees', [AttendanceController::class, 'index']);
Route::post('/records', [AttendanceController::class, 'store']);
