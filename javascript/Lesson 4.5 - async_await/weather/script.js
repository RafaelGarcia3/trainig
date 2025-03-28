const songs = {
    'Sweater Weather': { artist: 'The neighbourhood', year: 2012, genre: 'Alternative' },
    'Too Sweet': { artist: 'Hozier', year: 2024, genre: 'Pop' },
    'Callame': { artist: 'Bandalos Chinos', year: 2022, genre: 'Alternative' },
    'Midnight Sky' : {artist: 'Miley Cirus', year: 2020, genre: 'Pop rock' },
    'West Coast' : {artist: 'Lana Del Rey', year: 2014, genre: 'Alternative' }
};
const albums = {
    'Sweater Weather': 'I love you',
    'Too Sweet': 'Unreal Unearth: Unheard',
    'Callame': 'El Big Blue',
    'Midnight Sky' : 'Plastic Hearts',
    'West Coast' : 'Ultraviolence'
};
const durations = {
    'Sweater Weather': '4:00',
    'Too Sweet': '4:11',
    'Callame': '3:07',
    'Midnight Sky' : '3:43',
    'West Coast' : '4:26'
};

// song details
function getSongDetails(title) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const song = songs[title];
            if (song) {
                resolve(song);
            } else {
                reject(`Song "${title}" was not found.`);
            }
        }, 2000);
    });
}

// album details
function getAlbum(title) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const album = albums[title];
            if (album) {
                resolve(album);
            } else {
                reject(`Album for "${title}" was not found.`);
            }
        }, 2000);
    });
}

// song duration
function getDuration(title) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const duration = durations[title];
            if (duration) {
                resolve(duration);
            } else {
                reject(`Duration for "${title}" was not found.`);
            }
        }, 2000);
    });
}

async function fetchSong() {
    const title = document.getElementById('title').value;
    const resultSection = document.querySelector('#resultSection');
    let result = document.createElement('p');
    resultSection.appendChild(result);

    result.textContent = 'Searching song information...';

    try {
        const [songDetails, album, duration] = await Promise.all([getSongDetails(title), getAlbum(title), getDuration(title)]);
        result.textContent = ` Song: ${title} -- Artist: ${songDetails.artist} -- Album: ${album}  -- Year: ${songDetails.year}  -- Genre: ${songDetails.genre}  -- Duration: ${duration}`;
    } catch (error) {
        result.textContent = `Error: ${error}`;
    }
}

const searchButton = document.getElementById('search');
searchButton.addEventListener('click', fetchSong);
