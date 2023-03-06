<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Barber extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'age',
        'description'
    ];

    public function services() {
        return $this->belongsToMany(Service::class, 'barber_service');
    }

    public function time_slots() {
        return $this->hasMany(time_slot::class);
    }
}
