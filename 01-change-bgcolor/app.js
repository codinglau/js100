const btn = document.querySelector('button');   // select the button

// listen to click event of the button
btn.addEventListener('click', function(){
    document.body.style.backgroundColor = randomRgbColor();
})

// function that returns a random rgb color
function randomRgbColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}