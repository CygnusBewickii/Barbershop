<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Barber;
use App\Models\Day;
use App\Models\time_slot;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class BarberController extends Controller
{
    public function getAllBarbers(Request $request) {
        $barbers = Barber::all();
        if (count($barbers) == 0) {
            return response()->json([
                'message' => 'Error',
                'error' => "There aren't any barbers",
            ], 404);

        }
        return response()->json(
            $barbers
        );
    }

    public function getBarber(Request $request, $id) {
        $barber = Barber::query()->find($id);
        if (!$barber) {
            return response()->json([
                'message' => 'Error',
                'error' => "There isn't barber with id ${id}"
            ]);
        }
        return response()->json($barber);
    }

    public function createBarber(Request $request) {
        $barber = Barber::query()->create([
           'name' => $request->name,
            'age' => $request->age,
            'description' => $request->description
        ]);

        return response()->json([
            'message' => 'New barber created',
            'barber' => $barber
        ]);
    }

    public function updateBarber(Request $request, $id) {
        $barber = Barber::query()->find($id);

        $barber::query()->update($request->all());
        return response()->json([
           'message' => 'Barber information updated successful'
        ]);
    }

    public function getFreeTime(Request $request, $id, $date) {
        $barber = Barber::query()->find($id);
        if (!$barber) {
            return response()->json([
                'message' => 'Error',
                'error' => "There isn't barber with id ${id}"
            ]);
        }
        $day = Day::query()->where('date', $date)->first();
        if($day == null) {
            $day = Day::query()->create([
                'date' => $date
            ]);
            $dayId = $day->id;
            $barberId = $barber->id;
            for ($hours = 9; $hours <= 21; $hours++) {
                time_slot::query()->create([
                    'barber_id' => $barberId,
                    'day_id' => $dayId,
                    'time' => $hours.':00',
                ]);
            }
        }
        $freeTime = time_slot::query()->where('barber_id', $barber->id)
            ->where('day_id', $day->id)->where('client_name', null)->get();
        return response()->json([
            $freeTime
        ]);
    }
}
