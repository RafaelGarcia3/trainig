// Statement 1: The elephant weighs less than the mouse
const eleWeight = 1000;
const mouseWeight = 2;

let weightComparison;
if(eleWeight < mouseWeight){
    weightComparison = true;
}else{
    weightComparison = false;
}

// Statement 2: The Ostrich is taller than the duck
const ostrichHeight = 2;
const duckHeight = 0.3;

let heightComparison;
if(ostrichHeight > duckHeight){
    heightComparison = true;
}else{
    heightComparison = false;
}

// Statement 3: The two passwords match
const pwd1 = 'stromboli';
const pwd2 = 'stROmBoLi';

let pwdMatch;
if(pwd1 === pwd2){
    pwdMatch = true;
}else{
    pwdMatch = false;
}

const section = document.querySelector('section');

const para1 = document.createElement('p');
const para2 = document.createElement('p');
const para3 = document.createElement('p');

const weightTest = weightComparison ? 'True — elephants do weigh less than mice!?' : 'False — of course an elephant is heavier than a mouse!';
const heightTest = heightComparison ? 'True — an ostrich is indeed taller than a duck!' : 'False — apparently a duck is taller than an ostrich!?';
const pwdTest = pwdMatch ? 'True — the passwords match.' : 'False — the passwords do not match; please check them';

para1.textContent = weightTest;
section.appendChild(para1);
para2.textContent = heightTest;
section.appendChild(para2);
para3.textContent = pwdTest;
section.appendChild(para3);