<?php
    $selectedProducts = ["apple", "pear", "apple", "orange", "pear"];

    $singleProducts = array_unique($selectedProducts);

    sort($singleProducts);

    echo "Selected products:<br>";
    foreach ($singleProducts as $product) {
        echo "- $product<br>";
    }
?>