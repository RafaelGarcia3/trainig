const output = document.getElementById('output');

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, num) => accumulator + num, 0);

const resultado = `1. Sum of numbers: ${sum}`;

output.textContent = resultado;
