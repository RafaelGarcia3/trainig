let myName; 
const myAge = 24;
myName = "Rafael";

const section = document.querySelector('section');

const para1 = document.createElement('p');
para1.textContent = myName;
const para2 = document.createElement('p');
para2.textContent = myAge;
section.appendChild(para1);
section.appendChild(para2);