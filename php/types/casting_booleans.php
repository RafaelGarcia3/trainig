<?php
    echo "An empty string is false: ", var_dump((bool) "");
    echo "A string with the value 0 is false: ", var_dump((bool) "0");
    echo "The int number 1 is true: ", var_dump((bool) 1);
    echo "Any number except 0 is true: ", var_dump((bool) -2);
    echo "A string with content is true: ", var_dump((bool) "foo");
    echo "Any float number except for 0 is true: ", var_dump((bool) 2.3e5);
    echo "An array with content is true: ", var_dump((bool) array(12));
    echo "An empty array is false: ", var_dump((bool) array());
?>