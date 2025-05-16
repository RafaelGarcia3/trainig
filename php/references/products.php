<?php
    class Product {
        public $name;
        public $price;

        public function __construct($name, $price) {
            $this->name = $name;
            $this->price = $price;
        }
    }

    $cart = [
        new Product('Book', 15),
        new Product('Magazine', 7),
        new Product('Notebook', 5),
    ];

    foreach ($cart as &$product) {
        $product->price *= 1.10;
    }

    foreach ($cart as $product) {
        echo "{$product->name}: {$product->price} \n";
    }
?>