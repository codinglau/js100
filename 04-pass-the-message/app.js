const inputMsg = document.querySelector('.input-msg');
const lastMsg = document.querySelector('.last-msg');
    
inputMsg.addEventListener('input', function(){
    lastMsg.textContent = inputMsg.value;
})