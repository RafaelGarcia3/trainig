// An abstract class in JS
class Animal {
    constructor (name, species){
        if(this.constructor == Animal){
            throw new Error('Cannot instantiate an abstract class');
        }

        if(this.move == undefined){
            throw new Error('Method "move()" must be implemented in a subclass');
        }

        this.name = name;
        this.species = species;
    }

    speak() {
        return `${this.name} makes a sound.`;
    }
}

class Dog extends Animal{
    constructor(name, breed) {
        super(name, 'Dog'); 
        this.breed = breed;
    }

    getBreed() {
        return this.breed;
    }

    move(){
        return `${this.name} is walking!`
    }
}

const myDog = new Dog('Ronny', 'Pitbull');

// const animal = new Animal("Fred", "Pelican");

const abstract_section = document.querySelector('#abstract');
let info_dog = document.createElement('p');
info_dog.textContent = `My ${myDog.species} name's ${myDog.name}. He is a ${myDog.getBreed()} and ${myDog.speak()}`;
abstract_section.append(info_dog);


// An interface in JS
const BirdInterface = {
    info: function () { },
    hasChild: function (child) { },
    // sound : function(){},
};

class Bird {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    info() {
        return `The bird name is ${this.name} and it's a ${this.type}`;
    }

    hasChild(child) {
        if(child){
            return `The bird has at least a child!`;
        }else{
            return `The bird has not yet started its family.`;
        }
    }
}

function implementsInterface(obj, interfaceObj) {
    for (const method in interfaceObj) {
        if (!(method in obj) || 
            typeof obj[method] !== 'function') {
            return false;
        }
    }
    return true;
}

const myBird = new Bird('escalera','duck');

const interface_section = document.querySelector('#interface');
let info_bird = document.createElement('p');
interface_section.append(info_bird);


if (implementsInterface(myBird, BirdInterface)) {
    info_bird.textContent = 'Bird is implementing an Interface';
} else {
    info_bird.textContent = 'Bird is not implementing an Interface';
}
