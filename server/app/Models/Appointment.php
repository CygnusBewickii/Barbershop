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
        'barber_id',
        'service_id',
    ];
    public function barber(): HasOne {
        return $this->hasOne(Barber::class);
    }

    public function service(): HasOne {
        return $this->hasOne(Service::class);
    }
}
