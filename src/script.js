const mobileBtn = document.querySelector('.mobile-btn');
const nav = document.querySelector('.nav');

mobileBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});