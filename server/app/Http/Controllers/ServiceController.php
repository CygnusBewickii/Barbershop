<?php

namespace App\Http\Controllers;

use App\Models\Barber;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function getServicesByBarberId(Request $request, $barberId) {
        $barber = Barber::query()->find($barberId);

        return response()->json($barber->services);
    }
}
