<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Appointment extends Model
{
    use HasFactory;

    protected $fillable = [
        'date',
        'time_slot_id',
        'barber_id',
        'service_id',
    ];
    public function barber(): HasOne {
        return $this->hasOne(Barber::class);
    }

    public function service(): HasOne {
        return $this->hasOne(Service::class);
    }

    public function  time_slot() {
        return $this->hasOne(time_slot::class);
    }
}
