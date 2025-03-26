let bandInfo;

const band = {
    name : 'Imagine Dragons',
    nationality : 'US',
    genre : 'Indie Rock',
    members : 4,
    formed : 2008,
    split : false,
    albums : [
        {name : 'Night Visions', released : 2012},
        {name : 'Smoke + Mirrors', released : 2025},
        {name : 'Evolve', released: 2017},
        {name : 'Origins', released : 2018},
        {name : 'Mercury', released : 2022},
        {name : 'LOOM', released : 2024}
    ]
}

bandInfo =
    `${band.name} is a ${band.nationality} ${band.genre} band formed in ${band.formed}. 
    It consists of ${band.members} members and has not split. 
    Their most notable albums include: ${band.albums.map(album => album.name).join(', ')}.`;

const section = document.querySelector('section');
let para1 = document.createElement('p');
para1.textContent = bandInfo;
section.appendChild(para1);