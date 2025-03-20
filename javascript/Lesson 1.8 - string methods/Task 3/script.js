const quote = 'I dO nOT lIke gREen eGgS anD HAM';
let fixedQuote = quote.toLowerCase();
fixedQuote = fixedQuote.replace('i','I');

let finalQuote = (fixedQuote.replace('green eggs and ham','meat and dairy'))+'.';

const section = document.querySelector('section');

const para1 = document.createElement('p');
para1.textContent = fixedQuote;
const para2 = document.createElement('p');
para2.textContent = finalQuote;

section.appendChild(para1);
section.appendChild(para2);