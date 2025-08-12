document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('mobile-menu');
  const navMenu = document.querySelector('.nav-menu');
  
  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    if (navMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
  
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (navMenu.classList.contains('active')) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
  
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  const backToTopBtn = document.getElementById('back-to-top');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = 'flex';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });
  
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  const statNumbers = document.querySelectorAll('.stat-number');
  const statsSection = document.querySelector('.about-section');
  
  function animateStats() {
    const sectionPosition = statsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (sectionPosition < screenPosition) {
      statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const speed = 200;
        const count = parseInt(stat.textContent);
        const increment = Math.ceil(target / speed);
        
        if (count < target) {
          stat.textContent = count + increment;
          setTimeout(animateStats, 1);
        } else {
          stat.textContent = target;
        }
      });
    }
  }
  
  window.addEventListener('scroll', animateStats);
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  function animateGalleryItems() {
    galleryItems.forEach(item => {
      const itemPosition = item.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (itemPosition < screenPosition) {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }
    });
  }
  
  galleryItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = `opacity 0.5s ease, transform 0.5s ease ${index * 0.1}s`;
  });
  
  window.addEventListener('scroll', animateGalleryItems);
  animateGalleryItems(); 
  
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      this.reset();
    });
  }
  
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      alert(`Thank you for subscribing with ${emailInput.value}!`);
      emailInput.value = '';
    });
  }
});