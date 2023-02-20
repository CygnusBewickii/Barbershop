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

    public function services(): BelongsToMany {
        return $this->belongsToMany(Service::class, 'barber_service');
    }
}
