let finalResult;
let evenOddResult;

const num1=8, num2=4, num3=1, num4=5;
let op1 = num1 + num2;
let op2 = num4 - num3;
    
finalResult = op1 * op2;
evenOddResult = finalResult % 2;

const section = document.querySelector('section');

const para1 = document.createElement('p');
const finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${ finalResult }`;
para1.textContent = `Is the finalResult 48? ${ finalResultCheck }`;
const para2 = document.createElement('p');
const evenOddResultCheck = evenOddResult === 0 ? 'The final result is even!' : 'The final result is odd.';
para2.textContent = evenOddResultCheck;

section.appendChild(para1);
section.appendChild(para2);