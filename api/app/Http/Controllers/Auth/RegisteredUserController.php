<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\StoreUserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class RegisteredUserController extends Controller
{
    public function store(StoreUserRequest $request)
    {
        $data = $request->validated();
        $data['password'] = Hash::make($data['password']);

        $user = User::create($data);

        $token = $user->createToken('authToken')->plainTextToken;

        return response()->json([
            'success' => true,
            'user' => $user,
            'access_token' => $token,
            'message' => 'You are registered successfully.On your E-mail sended letter with verification link.',
        ], Response::HTTP_OK);


    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();
            $user->tokens()->delete();


            $token = $user->createToken('authToken')->plainTextToken;

            return response()->json([
                'success' => true,
                'user' => $user,
                'access_token' => $token,
                'message' => 'Login successful',
            ], Response::HTTP_OK);
        } else {
            $response = [
                'message' => 'These credentials do not match our records.',
                'errors' => [
                    'message' => ['Введите корректный email.'],
                ]
            ];
            return response()->json($response, 401);
        }
    }

    public function me(Request $request)
    {
        // Получаем текущего аутентифицированного пользователя
        $user = Auth::user();

        // Возвращаем информацию о пользователе
        return response()->json([
            'name' => $user->name,
            'email' => $user->email,
            // Добавьте другие поля по вашему желанию
        ]);
    }

    public function refresh(Request $request)
    {
        $user = Auth::user();

        // Удалите старый токен
        $user->tokens()->where('id', $request->token_id)->delete();

        // Создайте новый токен
        $newToken = $user->createToken('MyApp')->plainTextToken;

        // Возвращаем новый токен
        return response()->json([
            'token' => $newToken,
            'message' => 'Token refreshed successfully.',
        ]);
    }

    public function logout(Request $request)
    {
        if (Auth::check()) {
            // Get the authenticated user
            $user = $request->user();

            // Revoke all tokens for the authenticated user
            $user->tokens()->delete();
            // Return a success response
            return $this->sendResponse([], 'User logged out successfully.');
        } else {
            // If the user is not authenticated, return an error response
            return $this->sendError('Unauthorised.', ['error' => 'Unauthorised']);
        }
    }
}
