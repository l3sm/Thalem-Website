// Basic JS for navigation and form handling

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  // Toggle mobile menu
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Simple form submission handler for contact page
  const contactForm = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');
  if (contactForm) {
    contactForm.addEventListener('submit', () => {
      if (successMessage) {
        successMessage.style.display = 'block';
      }
    });
  }
});
