document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      navLinks.classList.toggle('active');
  });
  
  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
          menuToggle.classList.remove('active');
          navLinks.classList.remove('active');
      });
  });
  
  // Sticky Navigation on Scroll
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function() {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
  
  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
              });
          }
      });
  });
  
  // Animate elements on scroll
  const animateOnScroll = function() {
      const elements = document.querySelectorAll('.work-item, .about-image, .contact-form');
      
      elements.forEach(element => {
          const elementPosition = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          
          if (elementPosition < windowHeight - 100) {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
          }
      });
  };
  
  // Set initial state for animated elements
  document.querySelectorAll('.work-item, .about-image, .contact-form').forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(50px)';
      element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  // Run animation check on load and scroll
  window.addEventListener('load', animateOnScroll);
  window.addEventListener('scroll', animateOnScroll);
  
  // Form submission
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Get form values
          const formData = new FormData(this);
          const data = Object.fromEntries(formData.entries());
          
          // Here you would typically send the data to a server
          console.log('Form submitted:', data);
          
          // Show success message
          alert('Thank you for your message! I will get back to you soon.');
          this.reset();
      });
  }
});