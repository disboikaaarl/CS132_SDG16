// Smooth scroll
document.querySelectorAll('a[data-scroll]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// collapsible sections
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

// Wait for the page to load
window.addEventListener('load', () => {
  // Remove the loading screen
  const loadingScreen = document.querySelector('.loading-screen');
  if (loadingScreen) {
    loadingScreen.style.display = 'none';
  }
});


// navbar scroll behavior
const navbar = document.getElementById('navbar');
let lastScrollY = window.scrollY;
let scrollingFromClick = false;

// Detect nav link clicks
document.querySelectorAll('#navbar a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    scrollingFromClick = true;

    // Listen for scroll end (using timeout)
    const scrollCheck = setInterval(() => {
      if (Math.abs(window.scrollY - lastScrollY) < 2) {
        clearInterval(scrollCheck);
        setTimeout(() => {
          scrollingFromClick = false;
        }, 150); // small buffer
      } else {
        lastScrollY = window.scrollY;
      }
    }, 100);
  });
});

// Scroll listener
window.addEventListener('scroll', () => {
  if (scrollingFromClick) return; // Don't hide navbar if scrolling from nav link

  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    // Scrolling down
    navbar.style.top = `-${navbar.offsetHeight}px`;
  } else {
    // Scrolling up
    navbar.style.top = '0';
  }

  lastScrollY = currentScrollY;
});
