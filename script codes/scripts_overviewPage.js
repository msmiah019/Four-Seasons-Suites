
var smallDeviceMenu = document.getElementById("smallDeviceMenu")
function showMenu() {
    smallDeviceMenu.style.right = "0px";

}
function hideMenu() {
    smallDeviceMenu.style.right = "-250px";
}

// --------------------Social Media Slider-----------------------------------


const slider = document.querySelector('.slider');
const sliderContainer = document.querySelector('.slider-container');
const sliderItems = document.querySelectorAll('.slider-item');
const prevBtn = document.querySelector('.slider-control-prev');
const nextBtn = document.querySelector('.slider-control-next');

let currentSlide = 0;
const slideWidth = sliderItems[0].clientWidth;

sliderContainer.style.transform = "translateX(-${slideWidth * currentSlide}px)";

prevBtn.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = sliderItems.length - 1;
  }
  sliderContainer.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
});

nextBtn.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide > sliderItems.length - 1) {
    currentSlide = 0;
  }
  sliderContainer.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
});






