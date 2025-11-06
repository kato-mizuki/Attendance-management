<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AttendanceController extends Controller
{
    public function index()
    {
        return DB::table('employees')->get();
    }

    public function store(Request $request)
    {
        DB::table('records')->insert([
            'employee_id' => $request->employee_id,
            'type' => $request->type,
            'timestamp' => now(),
        ]);

        return response()->json(['status' => 'success']);
    }
}
