<?php
    $user = $_GET['user'] ?? "Guest";
    $isMember = $user !== "Guest" ? true : false;
    $age = 20;

    $cart = [
        ['name' => 'Keyboard', 'price' => 29.99, 'pieces' => 1],
        ['name' => 'Mouse', 'price' => 19.99, 'pieces' => 2],
        ['name' => 'Monitor', 'price' => 199.99, 'pieces' => 1]
    ];

    function calculateSubtotal($products) {
        $subtotal = 0;
        foreach ($products as $product) {
            $subtotal += $product['price'] * $product['pieces'];
        }
        return $subtotal;
    }

    $tax = 0.16;
    $subtotal = calculateSubtotal($cart);
    $total = $subtotal + ($subtotal * $tax);

    $proced = ($age >= 18 && $isMember);

    echo "User: $user \n";
    echo "Subtotal: $" . number_format($subtotal, 2) . "\n";
    echo "Total: $" . number_format($total, 2) . "\n";
    echo $proced ? "You can proced to payment.\n" : "You can't proced to payment.\n";
?>
