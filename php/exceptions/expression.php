<?php
    function test() {
        do_something_risky() or throw new Exception('It did not work');
    }
    
    // Simulating failure
    function do_something_risky() {
        return false;
    }
    
    try {
        test();
    } catch (Exception $e) {
        print $e->getMessage();
    }
?>