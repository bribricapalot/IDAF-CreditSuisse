<?php
header('Content-Type: application/json');
require_once __DIR__ . '/config.php';

try {
    $pdo = new PDO(
        "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4",
        DB_USER,
        DB_PASSWORD,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]
    );

 // Abfrage an den aktienkurs Table 
    $stmt = $pdo->query("SELECT * FROM aktienkurs");
    $aktien = $stmt->fetchAll();

    echo json_encode([
        "success" => true,
        "data" => $aktien
    ]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "error" => "Database connection failed",
        "details" => $e->getMessage()
    ]);
}