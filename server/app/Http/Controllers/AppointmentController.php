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
        $day = Day::query()->where('date', $request->appointmentTime)->first();
        $timeSlot = time_slot::query()->where('barber_id', $request->barberId)
            ->where('day_id', $day->id)
            ->where('time', $request->appointmentTime)
            ->where('client_name', null);
        $newAppointment = Appointment::query()->create([
            'time_slot_id' => $timeSlot->id,
            'barber_id' => $request->barberId,
            'service_id' => $request->serviceId,
        ]);
        $timeSlot->update([
            'client_name' => $request->clientName,
            'client_phone' => $request->clientPhone,
        ]);
        return response()->json([
            'message' => 'New appointment created',
            'appointment' => $newAppointment,
            'timeSlot' => $timeSlot,
        ]);
    }
}
