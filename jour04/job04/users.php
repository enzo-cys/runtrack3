<?php
$host = 'localhost';    
$dbname = 'utilisateurs'; 
$username = 'root';       
$password = '';         

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $query = "SELECT id, nom, prenom, email FROM utilisateurs";
    $stmt = $pdo->query($query);
    $utilisateurs = $stmt->fetchAll(PDO::FETCH_ASSOC);
    header('Content-Type: application/json');
    echo json_encode($utilisateurs);
} catch (PDOException $e) {
    echo json_encode(['error' => 'Erreur de connexion: ' . $e->getMessage()]);
}
