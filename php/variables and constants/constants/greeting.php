<?php
    // Using const keyword
    const GREETING = "Welcome to the system";

    $user = "admin";
    if( $user == "admin" ){
        echo GREETING . ", administrator";
    }else{
        echo "Access denied";
    }
?>