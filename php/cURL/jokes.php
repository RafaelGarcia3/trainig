<?php
    $url = "https://api.chucknorris.io/jokes/random";

    $ch = curl_init($url);

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($ch);

    curl_close($ch);

    $data = json_decode($response, true);
    echo "Joke: " . $data["value"];
?>