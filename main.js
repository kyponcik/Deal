import './style.css'

const wrraper = document.querySelector('.slider-wrraper');
const nextArrow = document.querySelector('.next-arrow');
const prevArrow = document.querySelector('.prev-arrow');
const sliderDots = document.querySelectorAll('.slider-dot');
const menuList = document.querySelectorAll('.footer__menu-list');

let transform = 0;
let counter = 0;

function nextSlide(){
   counter += 1;
   let offset = wrraper.getBoundingClientRect().width;
   transform -= offset;
   if (counter == 5){
      counter = 0;
      transform = 0;
   }
   for (let i = 0; i < sliderDots.length; i++){
      sliderDots[i].classList.remove('selected');
   };
   sliderDots[counter].classList.add('selected');
   wrraper.style.transform = `translateX(${transform}px)`;
};

function prevSlide(){
   counter -= 1;
   let offset = wrraper.getBoundingClientRect().width;
   transform += offset;
   if (counter == -1){
      counter = 4;
      transform = -4 * offset;      
   };
   for (let i = 0; i < sliderDots.length; i++){
      sliderDots[i].classList.remove('selected');
   };
   sliderDots[counter].classList.add('selected');
   wrraper.style.transform = `translateX(${transform}px)`;
}

function slideSwitch(event){
   let offset = wrraper.getBoundingClientRect().width;
   for (let i = 0; i < sliderDots.length; i++){
      sliderDots[i].classList.remove('selected');
   };
   event.target.classList.add('selected');
   counter = event.target.value;
   transform = -1 * offset * counter;
   wrraper.style.transform = `translateX(${transform}px)`;
};

nextArrow.addEventListener("click", nextSlide);
prevArrow.addEventListener("click", prevSlide);

for (let i = 0; i < sliderDots.length; i++){
   sliderDots[i].value = i;
   sliderDots[i].addEventListener("click", slideSwitch);

};

const menuBtn = document.querySelector('.menu__btn');

menuBtn.addEventListener('click', function(){
   menuBtn.classList.toggle('active');
});

console.log(menuList);

for (let list of menuList){
   list.addEventListener("click", function (event) {
      event.currentTarget.classList.toggle('open');
      console.log(event.currentTarget);
   });
};
