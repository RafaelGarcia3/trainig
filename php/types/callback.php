<?php
    function my_callback_function() {
        echo "Hello world! \n";
    }

    class MyClass {
        static function myCallbackMethod() {
            echo "Hello World! \n";
        }
    }

    // Simple callback
    call_user_func('my_callback_function');

    // Static class method call
    call_user_func(array('MyClass', 'myCallbackMethod'));

    // Object method call
    $obj = new MyClass();
    call_user_func(array($obj, 'myCallbackMethod'));

    // Static class method call
    call_user_func('MyClass::myCallbackMethod');
?>