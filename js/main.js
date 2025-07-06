// // Smooth scrolling for navigation links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         if (target) {
//             target.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//             });
//         }
//     });
// });

// // Navbar scroll effect
// window.addEventListener('scroll', function () {
//     const navbar = document.querySelector('.navbar');
//     if (window.scrollY > 50) {
//         navbar.classList.add('scrolled');
//     } else {
//         navbar.classList.remove('scrolled');
//     }
// });


// // Animated counters for statistics
// function animateCounters() {
//     const counters = document.querySelectorAll('.stat-number, .achievement-number');

//     counters.forEach(counter => {
//         const target = parseInt(counter.textContent.replace(/[+%]/g, ''));
//         const suffix = counter.textContent.match(/[+%]/)?.[0] || '';
//         const increment = target / 100;
//         let current = 0;

//         const updateCounter = () => {
//             if (current < target) {
//                 current += increment;
//                 counter.textContent = Math.ceil(current) + suffix;
//                 requestAnimationFrame(updateCounter);
//             } else {
//                 counter.textContent = target + suffix;
//             }
//         };

//         // Start animation when element is in viewport
//         const observer = new IntersectionObserver((entries) => {
//             if (entries[0].isIntersecting) {
//                 updateCounter();
//                 observer.disconnect();
//             }
//         });

//         observer.observe(counter);
//     });
// }

// // Initialize counter animation
// animateCounters();

// // Scroll to top button
// const scrollTopBtn = document.createElement('a');
// scrollTopBtn.href = '#';
// scrollTopBtn.className = 'scroll-top';
// scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
// document.body.appendChild(scrollTopBtn);

// scrollTopBtn.addEventListener('click', function (e) {
//     e.preventDefault();
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// });

// window.addEventListener('scroll', function () {
//     if (window.scrollY > 300) {
//         scrollTopBtn.classList.add('show');
//     } else {
//         scrollTopBtn.classList.remove('show');
//     }
// });

// // Service cards hover effect
// document.querySelectorAll('.service-card, .feature-card, .news-card, .project-card').forEach(card => {
//     card.addEventListener('mouseenter', function () {
//         this.style.transform = 'translateY(-10px)';
//     });

//     card.addEventListener('mouseleave', function () {
//         this.style.transform = 'translateY(0)';
//     });
// });

// // Mobile menu close on link click, but not for dropdown toggles
// document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
//     link.addEventListener('click', function (event) { // Added 'event' parameter
//         // Check if the clicked link is a dropdown toggle
//         // Dropdown toggles have the 'data-bs-toggle="dropdown"' attribute
//         if (this.hasAttribute('data-bs-toggle') && this.getAttribute('data-bs-toggle') === 'dropdown') {
//             // It's a dropdown toggle, so don't close the main menu.
//             // Let Bootstrap's default dropdown JS handle it.
//             return;
//         }

//         // If it's not a dropdown toggle, proceed to close the main menu
//         const navbarCollapse = document.querySelector('.navbar-collapse');
//         if (navbarCollapse.classList.contains('show')) {
//             const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
//                 toggle: false
//             });
//             bsCollapse.hide();
//         }
//     });
// });



// // Lazy loading for images
// document.addEventListener('DOMContentLoaded', function () {
//     const images = document.querySelectorAll('img[data-src]');

//     const imageObserver = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const img = entry.target;
//                 img.src = img.dataset.src;
//                 img.classList.remove('lazy');
//                 imageObserver.unobserve(img);
//             }
//         });
//     });

//     images.forEach(img => imageObserver.observe(img));
// });

// // Page loading animation
// window.addEventListener('load', function () {
//     document.body.classList.add('loaded');
// });

// // Accordion functionality for FAQ
// document.querySelectorAll('.accordion-button').forEach(button => {
//     button.addEventListener('click', function () {
//         const target = document.querySelector(this.getAttribute('data-bs-target'));
//         const isExpanded = this.getAttribute('aria-expanded') === 'true';

//         // Close all other accordions
//         document.querySelectorAll('.accordion-collapse').forEach(collapse => {
//             if (collapse !== target) {
//                 collapse.classList.remove('show');
//             }
//         });

//         document.querySelectorAll('.accordion-button').forEach(btn => {
//             if (btn !== this) {
//                 btn.classList.add('collapsed');
//                 btn.setAttribute('aria-expanded', 'false');
//             }
//         });
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById('currentYear').textContent = new Date().getFullYear();
// });

// // Handle form submission
// document.getElementById('trackingForm').addEventListener('submit', function (e) {
//     e.preventDefault();
//     const refNumber = document.getElementById('referenceNumber').value;

//     if (refNumber) {
//         document.getElementById('trackingResult').classList.remove('d-none');
//         document.getElementById('detailRefNumber').textContent = refNumber;
//         document.getElementById('trackingResult').scrollIntoView({ behavior: 'smooth' });
//     }
// });

// // Track another shipment
// document.getElementById('trackAnotherBtn').addEventListener('click', function () {
//     document.getElementById('trackingResult').classList.add('d-none');
//     document.getElementById('referenceNumber').value = '';
//     document.getElementById('referenceNumber').focus();
// });

// // Hero form submission
// document.getElementById('trackForm').addEventListener('submit', function (e) {
//     e.preventDefault();
//     const trackingNumber = document.getElementById('trackingNumberInput').value;

//     if (trackingNumber) {
//         document.getElementById('referenceNumber').value = trackingNumber;
//         document.getElementById('trackingForm').dispatchEvent(new Event('submit'));
//     }
// });


// // Lang
// document.addEventListener("DOMContentLoaded", function () {
//     "use strict"; // Apply to this scope
//     const languageButton = document.getElementById("languageButton");

//     const elementsToTranslate = {
//         "homeNav": { en: "Home", ar: "الرئيسية" },
//         "servicesNav": { en: "Services", ar: "خدماتنا" },
//         "allServices": { en: "All Services", ar: "جميع الخدمات" },
//         "landShipping": { en: "Land Shipping", ar: "الشحن البري" },
//         "seaShipping": { en: "Sea Shipping", ar: "الشحن البحري" },
//         "airShipping": { en: "Air Shipping", ar: "الشحن الجوي" },
//         "warehousing": { en: "Warehousing", ar: "التخزين" },
//         "trackNav": { en: "Track Order", ar: "تتبع الطلب" },
//         "aboutNav": { en: "About Us", ar: "من نحن" },
//         "contactNav": { en: "Contact Us", ar: "اتصل بنا" },
//         "languageButton": { en: "AR", ar: "EN" }
//     };

//     let currentLanguage = localStorage.getItem("language") || "ar";

//     function updateLanguage() {
//         for (const id in elementsToTranslate) {
//             const element = document.getElementById(id);
//             if (element) {
//                 element.textContent = elementsToTranslate[id][currentLanguage];
//             }
//         }

//         // تحديث لغة الصفحة واتجاه النص
//         document.documentElement.lang = currentLanguage === "en" ? "en" : "ar";
//         // document.style.direction = currentLanguage === "en" ? "ltr" : "rtl";
//         document.body.style.textAlign = currentLanguage === "en" ? "left" : "right";
//         if (languageButton) {
//             languageButton.textContent = elementsToTranslate["languageButton"][currentLanguage];
//         }

//     }

//     languageButton.addEventListener("click", function () {
//         currentLanguage = currentLanguage === "en" ? "ar" : "en";
//         localStorage.setItem("language", currentLanguage);
//         updateLanguage();
//         console.log(localStorage.getItem("language"));
//     });

//     updateLanguage();
// });

// document.getElementById('currentYear').textContent = new Date().getFullYear();

// // Console message
// console.log('🚚 مرحباً بك في موقع دعن للخدمات اللوجستية!');
// console.log('📧 للتواصل: info@danlogistics.com');
// console.log('🌐 الموقع تم تطويره بأحدث التقنيات');
// Utility function for selecting elements


const select = (selector, parent = document) => parent.querySelector(selector);
const selectAll = (selector, parent = document) => parent.querySelectorAll(selector);

// --- Smooth scrolling for navigation links ---
selectAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = select(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// --- Navbar scroll effect and Scroll to top button ---
const navbar = select('.navbar');
const scrollTopBtn = document.createElement('a');

const handleScrollEffects = () => {
    // Navbar scroll effect
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Scroll to top button visibility
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
};

window.addEventListener('scroll', handleScrollEffects);

// Initialize scroll to top button
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


// --- Animated counters for statistics ---
const animateCounter = (counter) => {
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

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            updateCounter();
            observer.disconnect();
        }
    });
    observer.observe(counter);
};

selectAll('.stat-number, .achievement-number').forEach(animateCounter);


// --- Element hover effect ---
const applyHoverEffect = (card) => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
};

selectAll('.service-card, .feature-card, .news-card, .project-card').forEach(applyHoverEffect);


// --- Mobile menu close on link click ---
selectAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function (event) {
        if (this.hasAttribute('data-bs-toggle') && this.getAttribute('data-bs-toggle') === 'dropdown') {
            return; // It's a dropdown toggle, don't close the main menu.
        }

        const navbarCollapse = select('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        }
    });
});

// --- Lazy loading for images ---
document.addEventListener('DOMContentLoaded', function () {
    const images = selectAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img); // Use observer here, not imageObserver directly
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// --- Page loading animation ---
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});

// --- Accordion functionality for FAQ (Leveraging Bootstrap's JS if available) ---
// If you are using Bootstrap 5, it already provides JavaScript for accordions.
// The custom logic below is typically only needed if you are not using Bootstrap's JS
// or are implementing a custom accordion.
// If you include Bootstrap's JS bundle, you can often remove this section.

selectAll('.accordion-button').forEach(button => {
    button.addEventListener('click', function () {
        // Bootstrap's JS usually handles this. If not, this custom logic would apply.
        // For a DRY approach, prefer to let Bootstrap handle its components.
        // If custom logic is required, consider a function:
        // handleAccordionToggle(this);
    });
});


// --- Dynamic Year Update ---
const updateCurrentYear = () => {
    const currentYearElement = select('#currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
};
document.addEventListener("DOMContentLoaded", updateCurrentYear);


// --- Form submission handlers ---
const trackingForm = select('#trackingForm');
const referenceNumberInput = select('#referenceNumber');
const trackingResult = select('#trackingResult');
const detailRefNumber = select('#detailRefNumber');
const trackAnotherBtn = select('#trackAnotherBtn');
const heroTrackForm = select('#trackForm');
const trackingNumberInput = select('#trackingNumberInput');

const handleTrackingFormSubmit = (e) => {
    e.preventDefault();
    const refNumber = referenceNumberInput.value;

    if (refNumber) {
        trackingResult.classList.remove('d-none');
        detailRefNumber.textContent = refNumber;
        trackingResult.scrollIntoView({ behavior: 'smooth' });
    }
};

const handleTrackAnother = () => {
    trackingResult.classList.add('d-none');
    referenceNumberInput.value = '';
    referenceNumberInput.focus();
};

const handleHeroFormSubmit = (e) => {
    e.preventDefault();
    const trackingNumber = trackingNumberInput.value;

    if (trackingNumber) {
        referenceNumberInput.value = trackingNumber;
        trackingForm.dispatchEvent(new Event('submit'));
    }
};

if (trackingForm) trackingForm.addEventListener('submit', handleTrackingFormSubmit);
if (trackAnotherBtn) trackAnotherBtn.addEventListener('click', handleTrackAnother);
if (heroTrackForm) heroTrackForm.addEventListener('submit', handleHeroFormSubmit);


// --- Language Switcher ---
// --- Language Switcher ---
document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    const languageButton = select("#languageButton");

    const elementsToTranslate = {
        homeNav: { en: "Home", ar: "الرئيسية" },
        servicesNav: { en: "Services", ar: "خدماتنا" },
        allServices: { en: "All Services", ar: "جميع الخدمات" },
        landShipping: { en: "Land Shipping", ar: "الشحن البري" },
        seaShipping: { en: "Sea Shipping", ar: "الشحن البحري" },
        airShipping: { en: "Air Shipping", ar: "الشحن الجوي" },
        warehousing: { en: "Warehousing", ar: "التخزين" },
        trackNav: { en: "Track Order", ar: "تتبع الطلب" },
        aboutNav: { en: "About Us", ar: "من نحن" },
        contactNav: { en: "Contact Us", ar: "اتصل بنا" },
        languageButton: { en: "AR", ar: "EN" }
    };

    let currentLanguage = localStorage.getItem("language") || "ar";

    function updateLanguage() {
        // بدّل النصوص
        for (const id in elementsToTranslate) {
            const el = select(`#${id}`);
            if (el) el.textContent = elementsToTranslate[id][currentLanguage];
        }

        // حدِّد اللغة والاتجاه مرة واحدة
        const isEn = currentLanguage === "en";
        document.documentElement.lang = isEn ? "en" : "ar";
        document.documentElement.dir = isEn ? "ltr" : "rtl";
        document.body.style.textAlign = isEn ? "left" : "right";

        // زر التبديل
        if (languageButton) {
            languageButton.textContent = elementsToTranslate.languageButton[currentLanguage];
        }
    }

    if (languageButton) {
        languageButton.addEventListener("click", () => {
            currentLanguage = currentLanguage === "en" ? "ar" : "en";
            localStorage.setItem("language", currentLanguage);
            updateLanguage();
            console.log(`Language set to ${currentLanguage}`);
        });
    }

    updateLanguage();  // تشغيل أولي
});



// Console messages
console.log('🚚 مرحباً بك في موقع دعن للخدمات اللوجستية!');
console.log('📧 للتواصل: info@danlogistics.com');
console.log('🌐 الموقع تم تطويره بأحدث التقنيات');