<?php
    function countWords(string $text, int &$counter) {
        $words = explode(' ', $text);
        $counter += count($words);
    }

    $finalCounter = 0;

    countWords("Hello World", $finalCounter);
    countWords("PHP is great", $finalCounter);
    countWords("This is an example", $finalCounter);

    echo "Total of words: $finalCounter";
?>