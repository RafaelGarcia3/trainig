<?php
    $stock = [
        ['name' => 'Laptop', 'stock' => 5],
        ['name' => 'Mouse', 'stock' => 12],
        ['name' => 'Teclado', 'stock' => 8],
    ];

    function refillStock(array &$products, int $pieces) {
        foreach ($products as &$product) {
            if ($product['stock'] < 10) {
                $product['stock'] += $pieces;
            }
        }
    }

    refillStock($stock, 5);

    print_r($stock);
?>