<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserSubcription extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable = [
        'user_id','subcription_plan_id','price','expired_date','payment_status','snap_token'
    ];

    public function subcriptionPlan(): BelongsTo
    {
        return $this->belongsTo(SubcriptionPlan::class);
    }
}
