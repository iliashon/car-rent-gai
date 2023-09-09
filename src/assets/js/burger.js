const burgerBtn = document.querySelector('.burger-btn');
const burgerLine = document.querySelector('.burger-btn-line');
const burgerNavBar = document.querySelector('.burger-nav-bar');

function switchBurgerNav() {
  burgerLine.classList.toggle('burger-btn-line_active');
  burgerNavBar.classList.toggle('burger-nav-bar_active');
}

burgerBtn.addEventListener('click', switchBurgerNav);