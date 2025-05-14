<?php
    $user = "admin";
    $pass = "1234";

    if ($user === "admin" && $pass === "1234") {
        echo "Successful login!";
    } elseif($user !== 'admin'){
        echo "Invalid user!";
    }else{
        echo "Invalid password!";
    }
?>