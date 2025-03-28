const op = document.getElementById('op');
const section = document.querySelector('#prom');
let result = document.createElement('p');

handleChange();
section.appendChild(result);

function codingPromise(userDistracted){
    return new Promise((resolve, reject) =>{
        if(userDistracted){
            reject('The user is watching memes! It seems like memes > work :O');
        }else{
            resolve('The user is coding! :)');
        }
    });
}

function handleChange(){
    const userDistracted = op.value === 'true';
    codingPromise(userDistracted    ).then((message) => {
        result.textContent = message;
    }).catch((error) => {
        result.textContent = error;
    });

}


op.addEventListener('change', handleChange);

