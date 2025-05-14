<?php
    $products = [
        ["name" => "Laptop", "price" => 900],
        ["name" => "Mouse", "price" => 20],
        ["name" => "Coffe", "price" => 0],
        ["name" => "Monitor", "price" => 200],
        ["name" => "Mousepad", "price" => 100],
    ];

    $total = 0;
    $spending_limit = 1000;

    foreach ($products as $product) {
        if ($product['price'] == 0) {
            echo "Product '{$product['name']}' without price. Skipping...\n";
            continue;
        }
        
        $total += $product['price'];
        echo "Added: {$product['name']} - \${$product['price']}\n";

        if ($total > $spending_limit) {
            echo "¡Spending limit of \$$spending_limit reached!\n";
            break;
        }
    }

    echo "Total: \$$total\n";
?>