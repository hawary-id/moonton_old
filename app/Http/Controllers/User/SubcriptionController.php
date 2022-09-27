<?php

namespace App\Http\Controllers\User;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\SubcriptionPlan;
use App\Http\Controllers\Controller;
use App\Models\UserSubcription;
use Illuminate\Support\Facades\Auth;

class SubcriptionController extends Controller
{
    public function index()
    {
        $subcriptionPlans = SubcriptionPlan::all();
        return inertia('User/Subcription/Index',[
            'subcriptionPlans' => $subcriptionPlans
        ]);
        
    }
    public function userSubcribe(Request $request, SubcriptionPlan $subcriptionPlan)
    {
        $data = [
            'user_id' => Auth::id(),
            'subcription_plan_id' => $subcriptionPlan->id,
            'price' => $subcriptionPlan->price,
            'expired_date' => Carbon::now()->addMonths($subcriptionPlan->active_period_in_months),
            'payment_status' => 'success'
        ];
        UserSubcription::create($data);
        return redirect(route('user.dashboard.index'));
    }
}
