const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const para = document.createElement('p');

function chooseName(){
    const element = Math.floor(Math.random() * names.length);
    para.textContent = `Random name choosed: ${names[element]}`
}

chooseName();
const section = document.querySelector('section');

section.appendChild(para);