<?php
    $operador = "division";
    $a = 10;
    $b = 2;
    
    switch ($operador) {
        case "addition":
            $result = $a + $b;
            break;
        case "substraction":
            $result = $a - $b;
            break;
        case "multiplication":
            $result = $a * $b;
            break;
        case "division":
            $result = $b != 0 ? $a / $b : "Error: Division by zero";
            break;
    }

    echo "Result of $operador between $a and $b: $resultado";
?>