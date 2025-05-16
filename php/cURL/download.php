<?php
    $url = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
    $file = "descarga.pdf";

    $fp = fopen($file, "w+");

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_FILE, $fp);
    curl_setopt($ch, CURLOPT_TIMEOUT, 50);
    curl_exec($ch);

    curl_close($ch);
    fclose($fp);

    echo "Download file as: $file";
?>