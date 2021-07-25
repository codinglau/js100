const sliderImages = document.querySelectorAll('.container img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let curActiveImg = 0;

prevBtn.addEventListener('click', function(){
    sliderImages[curActiveImg].classList.toggle('active');
    sliderImages[curActiveImg].classList.toggle('inactive');

    if (curActiveImg === 0) {
        curActiveImg = sliderImages.length - 1;    
    } else {
        curActiveImg -= 1;
    }
    
    sliderImages[curActiveImg].classList.toggle('active');
    sliderImages[curActiveImg].classList.toggle('inactive');
})

nextBtn.addEventListener('click', function(){
    sliderImages[curActiveImg].classList.toggle('active');
    sliderImages[curActiveImg].classList.toggle('inactive');
    
    if (curActiveImg === sliderImages.length - 1) {
        curActiveImg = 0;    
    } else {
        curActiveImg += 1;
    }
    
    sliderImages[curActiveImg].classList.toggle('active');
    sliderImages[curActiveImg].classList.toggle('inactive');
})