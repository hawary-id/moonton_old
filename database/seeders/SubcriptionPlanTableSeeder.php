<?php

namespace Database\Seeders;

use App\Models\SubcriptionPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubcriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subcriptionPlans = [
            [
                'name' => 'Basic',
                'price' => 200000,
                'active_period_in_months' => 3,
                'features' => json_encode(['feature 1','feature 2']),
            ],
            [
                'name' => 'Premium',
                'price' => 800000,
                'active_period_in_months' => 3,
                'features' => json_encode(['feature 1','feature 2','feature 3','feature 4']),
            ],
        ];
        SubcriptionPlan::insert($subcriptionPlans);
    }
}
