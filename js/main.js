// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// Animated counters for statistics
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number, .achievement-number');

    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/[+%]/g, ''));
        const suffix = counter.textContent.match(/[+%]/)?.[0] || '';
        const increment = target / 100;
        let current = 0;

        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + suffix;
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + suffix;
            }
        };

        // Start animation when element is in viewport
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCounter();
                observer.disconnect();
            }
        });

        observer.observe(counter);
    });
}

// Initialize counter animation
animateCounters();

// Scroll to top button
const scrollTopBtn = document.createElement('a');
scrollTopBtn.href = '#';
scrollTopBtn.className = 'scroll-top';
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

// Service cards hover effect
document.querySelectorAll('.service-card, .feature-card, .news-card, .project-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

// Mobile menu close on link click, but not for dropdown toggles
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function (event) { // Added 'event' parameter
        // Check if the clicked link is a dropdown toggle
        // Dropdown toggles have the 'data-bs-toggle="dropdown"' attribute
        if (this.hasAttribute('data-bs-toggle') && this.getAttribute('data-bs-toggle') === 'dropdown') {
            // It's a dropdown toggle, so don't close the main menu.
            // Let Bootstrap's default dropdown JS handle it.
            return;
        }

        // If it's not a dropdown toggle, proceed to close the main menu
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        }
    });
});



// Lazy loading for images
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// Page loading animation
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});

// Accordion functionality for FAQ
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', function () {
        const target = document.querySelector(this.getAttribute('data-bs-target'));
        const isExpanded = this.getAttribute('aria-expanded') === 'true';

        // Close all other accordions
        document.querySelectorAll('.accordion-collapse').forEach(collapse => {
            if (collapse !== target) {
                collapse.classList.remove('show');
            }
        });

        document.querySelectorAll('.accordion-button').forEach(btn => {
            if (btn !== this) {
                btn.classList.add('collapsed');
                btn.setAttribute('aria-expanded', 'false');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});

// Console message
console.log('🚚 مرحباً بك في موقع دعن للخدمات اللوجستية!');
console.log('📧 للتواصل: info@danlogistics.com');
console.log('🌐 الموقع تم تطويره بأحدث التقنيات');