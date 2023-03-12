<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Day;
use App\Models\time_slot;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class AppointmentController extends Controller
{
    public function createAppointment(Request $request) {
        $day = Day::query()->where('date', $request->appoit)
        $time_slot = time_slot::query()->where('barber_id', $request->barberId)->where()
        $newAppointment = Appointment::query()->create([
            ''
        ]);
    }
}
