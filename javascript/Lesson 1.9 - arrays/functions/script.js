const fruits = ['apple', 'banana', 'cherry'];

const output = [];

output.push(`Original array: ${fruits.join(', ')}`);

// push
fruits.push('orange');
output.push(`After push('orange'): ${fruits.join(', ')}`);

// pop
fruits.pop();
output.push(`After pop(): ${fruits.join(', ')}`);

// unshift
fruits.unshift('mango');
output.push(`After unshift('mango'): ${fruits.join(', ')}`);

// shift
fruits.shift();
output.push(`After shift(): ${fruits.join(', ')}`);

// indexOf
const index = fruits.indexOf('banana');
output.push(`Index of 'banana': ${index}`);

// includes
const hasGrapes = fruits.includes('grapes');
output.push(`Includes 'grapes'?: ${hasGrapes}`);

// slice
const sliced = fruits.slice(1);
output.push(`After slice(1): ${sliced.join(', ')}`);

// splice
fruits.splice(1, 1, 'pear');
output.push(`After splice(1, 1, 'pear'): ${fruits.join(', ')}`);

// reverse
fruits.reverse();
output.push(`After reverse(): ${fruits.join(', ')}`);

// join
const fruitString = fruits.join(' | ');
output.push(`Joined with ' | ': ${fruitString}`);

// forEach (does not return new array)
let upperCaseFruits = [];
fruits.forEach(fruit => {
    upperCaseFruits.push(fruit.toUpperCase());
});
output.push(`Using forEach to uppercase: ${upperCaseFruits.join(', ')}`);

// map (returns new array directly)
const mappedFruits = fruits.map(fruit => fruit.toUpperCase());
output.push(`Using map to uppercase: ${mappedFruits.join(', ')}`);

// Demonstrate that map returns a new array and does not mutate the original
output.push(`Original array after map: ${fruits.join(', ')}`);

// forEach
const section = document.querySelector('section');
output.forEach(text => {
    const para = document.createElement('p');
    para.textContent = text;
    section.appendChild(para);
});
