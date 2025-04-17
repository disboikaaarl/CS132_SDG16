document.querySelectorAll('a[data-scroll]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Stop default jump
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
  