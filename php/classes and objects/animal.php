<?php
    // This class use Inheritance, static methods 
    class Animal{
        protected string $name;

        public function __construct(string $name){
            $this->name = $name; 
        }

        public function makeSound(){
            return "$this->name is making a sound!";
        }
    }

    class Dog extends Animal{
        public function makeSound(){
            return "$this->name is barking!";
        }
    }

    class Cat extends Animal{
        public function makeSound(){
            return "$this->name is meowing!";
        }
    }

    class AnimalUtils{
        public static function describe( Animal $animal ){
            echo $animal->makeSound() . "\n";
        }
    }

    $dog = new Dog("Rony");
    $cat = new Cat("Kenny");

    AnimalUtils::describe($dog);
    AnimalUtils::describe($cat);
?>