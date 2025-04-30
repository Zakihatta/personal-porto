// Navbar scroll behavior
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
const scrollThreshold = 100; // Threshold in pixels

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Show/hide navbar based on scroll direction
    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
        // Scrolling down & past threshold
        navbar.classList.add('hide');
    } else {
        // Scrolling up or at top
        navbar.classList.remove('hide');
    }
    
    lastScrollTop = scrollTop;
});

// Improve mobile menu handling
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});