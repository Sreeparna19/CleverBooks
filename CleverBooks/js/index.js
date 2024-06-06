const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;
let ticking = false;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.classList.add('slide-up');
    navbar.classList.remove('slide-down');
  } else {
    // Scrolling up
    navbar.classList.add('slide-down');
    navbar.classList.remove('slide-up');
  }
  lastScrollTop = scrollTop;
});

function requestAnimationFrame(callback) {
  if (!ticking) {
    ticking = true;
    window.requestAnimationFrame(() => {
      callback();
      ticking = false;
    });
  }
}