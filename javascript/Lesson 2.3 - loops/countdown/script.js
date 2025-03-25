//Using a for loop
const info_for = document.createElement('h1');
info_for.textContent = 'Using a for loop'
document.body.appendChild(info_for);

for(let i = 10; i>=0 ; i--){
    const para = document.createElement('p');
    if(i === 10){
        para.textContent = 'Countdown ' + i;
    }else if (i==0){
        para.textContent = 'Blast off!';
    }else{
        para.textContent = i;
    }
    document.body.appendChild(para);
}

//Using a while loop
let i = 10;

const info_while = document.createElement('h1');
info_while.textContent = 'Using a while loop'
document.body.appendChild(info_while);

while(i >= 0) {
    const para = document.createElement('p');
    if(i === 10) {
    para.textContent = 'Countdown ' + i;
    } else if(i === 0) {
    para.textContent = 'Blast off!';
    } else {
    para.textContent = i;
    }

    document.body.appendChild(para);
    i--;
}