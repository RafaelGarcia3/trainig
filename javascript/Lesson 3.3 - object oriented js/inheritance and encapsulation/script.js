// parent class with encapsulation
class Animal {
    #species; // private field

    constructor(name, species) {
        this.name = name;
        this.#species = species;
    }

    getSpecies() {
        return this.#species;
    }

    speak() {
        return `${this.name} makes a sound.`;
    }
}

// child class inheriting from Animal
class Dog extends Animal {
    constructor(name, breed) {
        super(name, 'Dog'); // call the parent class constructor
        this.breed = breed;
    }

    speak() {
        return `${this.name} barks.`;
    }

    getBreed() {
        return this.breed;
    }
}

const myDog = new Dog('Ronny', 'Pitbull');

const section = document.querySelector('section');
let info_dog = document.createElement('p');
info_dog.textContent = `My ${myDog.getSpecies()} name's ${myDog.name}. He is a ${myDog.getBreed()} and ${myDog.speak()}`;
section.append(info_dog);