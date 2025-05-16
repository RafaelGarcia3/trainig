<?php
    $tech = "php,  JavaScript , html , CSS,   php  ";
    $tags = explode(",", $tech);

    $output = [];
    foreach ($tags as $tag) {
        $item = strtolower(trim($tag));
        if (!in_array($item, $output)) {
            $output[] = $item;
        }
    }

    echo "<ul>";
    foreach ($output as $tag) {
        echo "<li>" . ucfirst($tag) . "</li>";
    }
    echo "</ul>";
?>