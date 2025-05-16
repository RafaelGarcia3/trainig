<?php
    $deadline = "2025-12-10";
    $today = new DateTime();
    $limit = new DateTime($deadline);

    $difference = $today->diff($limit);
    echo "Remaining " . $difference->days . " days for the deadline.";
?>
