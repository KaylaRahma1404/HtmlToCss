// main.js

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navbar = document.querySelector('.navbar');

    mobileMenuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.navbar-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile menu after clicking a link
                navbar.classList.remove('active');
            }
        });
    });

    // Scroll-triggered animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    function checkScroll() {
        animatedElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.8) {
                el.classList.add('animated');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on page load

    // Form submission handling
    const contactForm = document.querySelector('#contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            alert('Form submitted successfully!');
            contactForm.reset();
        });
    }

    // Image lazy loading
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const lazyLoad = target => {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.disconnect();
                }
            });
        });

        io.observe(target);
    };

    lazyImages.forEach(lazyLoad);
});
