<?php

namespace App\Http\Controllers;

abstract class Controller
{
    public function sendResponse($result, $message)
    {
        $response = [
            'success' => true,
            'data' => $result,
            'message' => $message,
        ];

        return response()->json($response, 200);
    }

    public function sendError($error,$errorMessages = [], $code = 404)
    {
        $responce = [
            'success' => false,
            'message' => $error,
        ];
        if(!empty($errorMessages)){
            $responce['errors'] = $errorMessages;
        }
        return response()->json($responce, $code);
    }
}
