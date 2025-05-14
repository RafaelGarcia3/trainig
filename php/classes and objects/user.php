<?php
    // This class uses encapsulation and the use of methods
    class User {
        private string $name;
        private string $email;

        public function __construct(string $name, string $email){
            $this->name = $name;
            $this->email = $email; 
        }

        public function getName(){
            return $this->name;
        }

        public function setName(string $name){
            $this->name = $name;
        }

        public function showInfo(){
            echo "User $this->name - Email: $this->email \n";
        }
    }

    $user = new User("Rafael", "rafael@aspiresys.com");
    $user->showInfo();
    $user->setName("Rafael Garcia");

    echo "Updated name: ". $user->getName();
?>