// This code shows examples of a synchronous operation 
// and an asynchronous operation 
const section = document.querySelector('section');
let sync_p = document.createElement('p');
sync_p.textContent = 'Synchronous operation executed';
section.appendChild(sync_p);

let async_p = document.createElement('p');
setTimeout(() => {
    async_p.textContent = 'Asynchronous operation executed after 3 seconds';
    section.appendChild(async_p);
}, 3000);



