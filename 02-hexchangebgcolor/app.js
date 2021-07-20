const btn = document.querySelector('button');   // select the button
const p = document.querySelector('p');

// listen to click event of the button
btn.addEventListener('click', function(){
    let hexColor = randomHexColor();
    document.body.style.backgroundColor = hexColor;
    p.textContent = `Hex Color: ${hexColor}`
})

function numToHex() {
    return (Math.floor(Math.random() * 15) + 1).toString(16).toUpperCase();
}

// function that returns a random rgb color
function randomHexColor(){
    let hexCode = '#';
    while(hexCode.length < 7) {
        hexCode += numToHex();
    }
    return hexCode;
}