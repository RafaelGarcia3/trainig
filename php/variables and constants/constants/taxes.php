<?php
    define("IVA", 0.16);

    $base_price = 100.00;

    $tax = $base_price * IVA;
    $price = $base_price + $tax;

    echo "Bill \n";
    echo "Base price: \$$base_price \n";
    echo "IVA (" . (IVA * 100) . "%): \$$tax \n";
    echo "Total: \$$price";
?>
