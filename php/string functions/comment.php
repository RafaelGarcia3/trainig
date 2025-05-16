<?php
    $comment = "<script>alert('XSS');</script> I love this product!!!   ";
    $cleanComment = htmlspecialchars(trim($comment));
    $cleanComment = wordwrap($cleanComment, 40, "\n");

    echo "Processed comment:\n";
    echo $cleanComment;
?>