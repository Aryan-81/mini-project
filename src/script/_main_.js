document.addEventListener("DOMContentLoaded", function() {
    let prevScrollPos = window.pageYOffset;
    const nav = document.getElementById("nav");
    const navbarHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'));
    const scrollThreshold = 50; // Adjust as needed
  
    window.onscroll = function() {
      const currentScrollPos = window.pageYOffset;
      if (Math.abs(prevScrollPos - currentScrollPos) > scrollThreshold) {
        if (currentScrollPos > prevScrollPos) {
          // Scrolling down
          nav.style.top = `-${navbarHeight}px`;
        } else {
          // Scrolling up
          nav.style.top = "0";
        }
        prevScrollPos = currentScrollPos;
      }
    };
  });


const currentPage = window.location.href;
const navLinks = document.querySelectorAll('#nav a');
navLinks.forEach(link => {
    if (link.href === currentPage) {
        const indicator = document.getElementById('indic');
        const linkPosition = link.offsetLeft;
        indicator.style.left = `calc(${linkPosition}px + 5%)`;
    }
});


var hamburgerButton = document.getElementById("hamburgerButton");
var menuElement = document.getElementById("nav-menu");
hamburgerButton.addEventListener("click", function() {
  this.classList.toggle("is-active");
  if (menuElement.classList.contains("nav-menu")) {
    menuElement.classList.remove("nav-menu");
    menuElement.classList.add("hamburger-menu");
  } else {
    menuElement.classList.remove("hamburger-menu");
    menuElement.classList.add("nav-menu");
  }
});

