// Final result should be 4633.33

let result = 7 + (13 / 9) + 7;
let result2 = 100 / 2 * 6;

result*=result2;
let finalResult = result.toFixed(2);
let finalNumber;

if(typeof(finalResult)==='String'){
    finalNumber = Number(finalResult);
}else{
    finalNumber = finalResult;
}


const section = document.querySelector('section');

const para1 = document.createElement('p');
para1.textContent = `Your finalResult is ${ finalResult }`;
const para2 = document.createElement('p');
const finalNumberCheck = isNaN(finalNumber) === false ? 'finalNumber is a number type. Well done!' : `Ooops! finalNumber is not a number.`;
para2.textContent = finalNumberCheck;

section.appendChild(para1);
section.appendChild(para2);