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


// Get the current page URL
const currentPage = window.location.href;
// Get all the links in the navigation
const navLinks = document.querySelectorAll('#nav a');
// Loop through each link to find the current page
navLinks.forEach(link => {
    if (link.href === currentPage) {
        // If the link matches the current page, set the indicator position
        const indicator = document.getElementById('indic');
        const linkPosition = link.offsetLeft;
        indicator.style.left = `calc(${linkPosition}px + 5%)`;
    }
});