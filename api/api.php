<?php
 header('Content-Type: application/json');

$response = [
    'message' => 'Hello from the API!',
    'data' => ['foo' => 'bar']
];

echo json_encode($response);
