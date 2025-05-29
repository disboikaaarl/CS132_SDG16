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

// Collapsible sections
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
  const loadingScreen = document.querySelector('.loading-screen');
  if (loadingScreen) {
    loadingScreen.style.display = 'none';
  }
});

// Navbar scroll behavior (adjusted sensitivity)
const navbar = document.getElementById('navbar');
let lastScrollY = window.scrollY;
let scrollingFromClick = false;
const scrollThreshold = 10; // <-- Adjust this number to tune sensitivity

// Detect nav link clicks
document.querySelectorAll('#navbar a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    scrollingFromClick = true;

    // Smooth scroll manually
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    // Stop hiding navbar temporarily during scroll
    const scrollCheck = setInterval(() => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY) < 2) {
        clearInterval(scrollCheck);
        setTimeout(() => {
          scrollingFromClick = false;
        }, 150);
      } else {
        lastScrollY = currentScrollY;
      }
    }, 100);
  });
});

// Scroll listener with reduced sensitivity
window.addEventListener('scroll', () => {
  if (scrollingFromClick) return;

  const currentScrollY = window.scrollY;
  const delta = currentScrollY - lastScrollY;

  // Only act if movement is significant
  if (Math.abs(delta) > scrollThreshold) {
    if (delta > 0 && currentScrollY > 100) {
      // Scrolling down — hide navbar
      navbar.style.top = `-${navbar.offsetHeight + 20}px`;
    } else {
      // Scrolling up — show navbar
      navbar.style.top = '20px'; // match your CSS
    }

    lastScrollY = currentScrollY;
  }
});

// Tab functionality
document.getElementById("defaultOpen").click();

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

window.addEventListener('load', () => {
  const life = document.querySelector('.life');
  const love = document.querySelector('.love');
  const lawbreaking = document.querySelector('.lawbreaking');

  setTimeout(() => {
    life.classList.add('hovered');
    setTimeout(() => {
      life.classList.remove('hovered');
      love.classList.add('hovered');
      setTimeout(() => {
        love.classList.remove('hovered');
        lawbreaking.classList.add('hovered');
        setTimeout(() => {
          lawbreaking.classList.remove('hovered');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 500);
});
