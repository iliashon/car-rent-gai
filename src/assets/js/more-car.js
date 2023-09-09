const moreCarBtn = document.querySelector('.home-main-cars-title-btn-more');
const carWrapper = document.querySelector('.home-main-cars');

function switchCarList() {
  carWrapper.classList.toggle('home-main-cars_active');
  moreCarBtn.classList.toggle('home-main-cars-title-btn-more_active');
}

moreCarBtn.addEventListener('click', switchCarList);