const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
const para = document.createElement('p');

para.textContent = 'Names with less than 5 characters: ';
const shortNames = names.filter((name)=>{return name.length < 5});
para.textContent += shortNames;


const section = document.querySelector('section');

section.appendChild(para);