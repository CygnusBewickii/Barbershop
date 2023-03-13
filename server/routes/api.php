<?php

use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\BarberController;
use App\Http\Controllers\ServiceController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
Route::prefix('/barbers')->group(function () {
    Route::get('/', [BarberController::class, 'getAllBarbers']);
    Route::get('/{id}', [BarberController::class, 'getBarber']);
    Route::post('/', [BarberController::class, 'createBarber']);
    Route::put('/{id}', [BarberController::class, 'updateBarber']);
    Route::get('/{id}/getFreeTime/{date}', [BarberController::class, 'getFreeTime']);
});
Route::prefix('/services')->group(function () {
   Route::get('/barber/{id}', [ServiceController::class, 'getServicesByBarberId']);
});
Route::prefix('/appointments')->group(function () {
   Route::post('/createAppointment', [AppointmentController::class, 'createAppointment']);
});

