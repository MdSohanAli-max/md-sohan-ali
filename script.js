AOS.init();

const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

const contactForm = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');
contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  formResponse.textContent = 'Thank you! Your message has been sent.';
  contactForm.reset();
});
