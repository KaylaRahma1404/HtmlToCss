document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navbar = document.querySelector('.navbar');

  mobileMenuToggle.addEventListener('click', function() {
    navbar.classList.toggle('active');
  });
});
