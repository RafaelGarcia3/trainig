<?php
    // This class use interfaces and traits
    interface Shop{
        public function calculateFinalPrice();
    }

    trait Tax {
        public function applyTax(float $price){ 
            return $price * 1.16;
        }
    }

    class Product implements Shop{
        use Tax;
        protected string $name;
        protected float $basePrice;

        public function __construct(string $name, float $basePrice){
            $this->name = $name;
            $this->basePrice = $basePrice;
        }

        public function calculateFinalPrice(){
            return $this->applyTax($this->basePrice);
        }

        public function show(){
            echo "$this->name: \$" . $this->calculateFinalPrice() . "\n";
        }
    }

    $product = new Product("Galaxy s23", 25000.00);
    $product->show();
?>