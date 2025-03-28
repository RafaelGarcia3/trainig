// using a function
function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet: function() {
            return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
        }
    };
}

const person1 = createPerson('Alice', 30);
const func = document.querySelector('#func');
func.textContent = person1.greet();

// using a prototype
const personPrototype = {
    greet: function() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};

const person2 = Object.create(personPrototype);
person2.name = 'Bob';
person2.age = 25;
const prom = document.querySelector('#prom');
prom.textContent = person2.greet();


// using a class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const person3 = new Person('Charlie', 35);
const cl = document.querySelector('#cl');
cl.textContent = person3.greet();
