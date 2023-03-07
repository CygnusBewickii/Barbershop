<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class time_slot extends Model
{
    protected $fillable = [
        'barber_id',
        'day_id',
        'time',
        'client_name',
        'client_phone'
    ];
    use HasFactory;
}
