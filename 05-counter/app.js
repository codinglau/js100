const counter = document.querySelector('.counter');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');

let realCounter = 1;
counter.textContent = realCounter;

plus.addEventListener('click', function(){
    realCounter += 1;
    counter.textContent = realCounter;
})

minus.addEventListener('click', function(){
    realCounter -= 1;
    counter.textContent = realCounter;
})