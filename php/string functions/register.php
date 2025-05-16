<?php
    $name = "  rafael garcia  ";
    $email = "RAFAEL.GARCIA@EMAIL.COM ";
    $password = "abc123";

    $name = ucwords(trim(strtolower($name)));
    $email = strtolower(trim($email));

    if (strlen($password) < 8) {
        echo "Password has to be at least 8 characters";
    } else {
        echo "Successful registration for $name with email $email";
    }
?>