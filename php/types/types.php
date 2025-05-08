<?php
    $a_bool = true;
    $a_string1 = "String with double quotes";
    $a_string2 = 'String with single quotes';
    $a_int = 5;

    echo get_debug_type($a_bool), "\n";
    echo get_debug_type($a_string1), "\n";

    // If a_int is an integer, increment it by 5
    if(is_int($a_int)){
        $a_int += 4;
    }

    echo "This is the value of \$a_int: $a_int";

    // If a_bool is a string the user is going to see it
    if(is_string($a_bool)){
        echo "String: $a_bool";
    }
?>