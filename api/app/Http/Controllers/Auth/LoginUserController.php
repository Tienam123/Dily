<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class LoginUserController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email'    => 'required|string|email',
            'password' => 'required|string',
        ]);
        if (Auth::attempt(['email'    => $request->email,
                           'password' => $request->password
        ])) {
            $user = Auth::user();
            $user->tokens()
                 ->delete();


            $token = $user->createToken('authToken')->plainTextToken;

            return response()->json([
                'success'      => true,
                'user'         => $user,
                'access_token' => $token,
                'message'      => 'Login successful',
            ], Response::HTTP_OK);
        } else {
            $response = [
                'message' => 'These credentials do not match our records.',
                'errors'  => [
                    'message' => ['Введите корректный email.'],
                ]
            ];
            return response()->json($response, 401);
        }
    }
}
