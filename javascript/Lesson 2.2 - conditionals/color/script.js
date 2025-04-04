const select = document.querySelector('select');
const html = document.querySelector('html');

select.onchange = function() {
    const choice = select.value;

    switch(choice) {
        case 'black':
            update('black','white');
        break;
        case 'white':
            update('white','black');
        break;
        case 'purple':
            update('purple','white');
        break;
        case 'yellow':
            update('yellow','darkgray');
        break;
        case 'psychedelic':
            update('lime','purple');
        break;
    }
}

select.value = 'white';
update('white','black');

function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}