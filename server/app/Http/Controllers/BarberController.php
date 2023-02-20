<?php

namespace App\Http\Controllers;

use App\Models\Barber;
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
}
