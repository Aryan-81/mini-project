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