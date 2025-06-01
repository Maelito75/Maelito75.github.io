const slider = document.querySelector('.slider');
const nxtBtn = document.querySelector('.nxt-btn');
const preBtn = document.querySelector('.pre-btn');

let sliderWidth = slider.getBoundingClientRect().width;

nxtBtn.addEventListener('click', () => {
    slider.scrollLeft += sliderWidth;
});

preBtn.addEventListener('click', () => {
    slider.scrollLeft -= sliderWidth;
});