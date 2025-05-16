<?php
    $users = [
        ["name" => "Ana", "age" => 25],
        ["name" => "Luis", "age" => 17],
        ["name" => "Carlos", "age" => 30],
        ["name" => "Sofia", "age" => 15],
    ];

    $olders = array_filter($users, function($user) {
        return $user["age"] >= 18;
    });

    // Obtener solo los names
    $namesOlders = array_column($olders, "name");

    // Convertir a cadena
    echo "Users with legal age: " . implode(", ", $namesOlders);
?>
