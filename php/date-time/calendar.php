<?php
    date_default_timezone_set("America/Mexico_City");

    echo "<h4>Events for the next 7 days:</h4>";
    $today = strtotime("now");

    for ($i = 0; $i < 7; $i++) {
        $date = date("l d-m-Y", strtotime("+$i day", $today));
        echo "- $date<br>";
    }
?>