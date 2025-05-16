<?php
    $sales = [100, 200, 300, 150, 400];

    $total = array_sum($sales);
    $avg = $total / count($sales);

    $max = max($sales);
    $min = min($sales);

    echo "Total: $total<br>";
    echo "Average: $avg<br>";
    echo "Max. sale: $max<br>";
    echo "Min. sale: $min<br>";
?>
