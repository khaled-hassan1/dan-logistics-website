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
document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    const languageButton = select("#languageButton");

    const elementsToTranslate = {
        // Page Title
        homePageTitle: { en: "Dan Logistic Services - Home", ar: "دعن للخدمات اللوجستية - الرئيسية" },
        aboutPageTitle: { en: "About Us - Dan Logistic Services", ar: "من نحن - دعن للخدمات اللوجستية" },
        airShippingPageTitle: { en: "Dan Logistic Services - Air Shipping", ar: "دعن للخدمات اللوجستية - الشحن الجوي" },
        contactPageTitle: { en: "Contact Us - Dan Logistic Services", ar: "اتصل بنا - دعن للخدمات اللوجستية" },
        landShippingPageTitle: { en: "Dan Logistic Services - Land Shipping", ar: "دعن للخدمات اللوجستية - الشحن البري" },
        seaShippingPageTitle: { en: "Dan Logistic Services - Sea Shipping", ar: "دعن للخدمات اللوجستية - الشحن البحري" },
        servicesPageTitle: { en: "Our Services - Dan Logistic Services", ar: "خدماتنا - دعن للخدمات اللوجستية" },
        trackPageTitle: { en: "Dan Logistic Services - Track Order", ar: "دعن للخدمات اللوجستية - تتبع الطلب" },
        warehousingPageTitle: { en: "Dan Logistic Services - Warehousing", ar: "دعن للخدمات اللوجستية - التخزين" },

        // Navigation
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
        languageButton: { en: "ع", ar: "EN" },

        // Brand and Logo
        brandAr: { en: "DAN LOGISTIC SERVICES", ar: "دعن للخدمات اللوجستية" },
        brandEn: { en: "DAN LOGISTIC SERVICES", ar: "DAN LOGISTIC SERVICES" },

        // Hero Section
        heroTitle: { en: "Your Trusted Partner in Logistics Solutions", ar: "شريكك الموثوق في الحلول اللوجستية" },
        heroSubtitle: {
            en: "We provide integrated logistics services including land, sea and air shipping, warehousing, and customs services with the highest standards of quality and speed throughout the Kingdom and the Gulf countries",
            ar: "نقدم خدمات لوجستية متكاملة تشمل الشحن البري والبحري والجوي، التخزين، والخدمات الجمركية بأعلى معايير الجودة والسرعة في جميع أنحاء المملكة ودول الخليج"
        },
        exploreServicesBtn: { en: "Explore Our Services", ar: "استكشف خدماتنا" },

        // Footer Quick Links
        footerHomeLink: { en: 'Home', ar: 'الرئيسية' },
        footerAboutLink: { en: 'About Us', ar: 'من نحن' },
        footerServicesLink: { en: 'Services', ar: 'خدماتنا' },
        footerTrackLink: { en: 'Track Order', ar: 'تتبع الطلب' },
        footerContactLink: { en: 'Contact Us', ar: 'اتصل بنا' },

        // Footer Services Links
        footerLandShippingLink: { en: 'Land Shipping', ar: 'الشحن البري' },
        footerSeaShippingLink: { en: 'Sea Shipping', ar: 'الشحن البحري' },
        footerAirShippingLink: { en: 'Air Shipping', ar: 'الشحن الجوي' },
        footerWarehousingLink: { en: 'Warehousing', ar: 'التخزين' },

        // Tracking Section
        trackingTitle: { en: "Track Your Shipment Status", ar: "تتبع حالة شحنتك" },
        referenceLabel: { en: "Reference Number", ar: "رقم المرجع (الرفرنس)" },
        referencePlaceholder: { en: "Enter your 10-digit reference number", ar: "أدخل رقم المرجع المكون من 10 أرقام" },
        trackBtn: { en: "Track", ar: "تتبع" },
        trackingHelp: { en: "You can find the reference number on your shipping receipt or email", ar: "يمكنك العثور على رقم المرجع في إيصال الشحن أو البريد الإلكتروني الخاص بك" },

        // Tracking Results
        shipmentStatusTitle: { en: "Shipment Status:", ar: "حالة الشحنة:" },
        statusInTransit: { en: "In Transit", ar: "في الطريق" },

        // Timeline Steps
        orderReceived: { en: "Order Received", ar: "تم استلام الطلب" },
        orderReceivedDate: { en: "July 12, 2025 - 10:30 AM", ar: "12 يوليو 2025 - 10:30 ص" },
        orderReceivedDesc: { en: "Shipment received at Riyadh warehouse", ar: "تم استلام الشحنة في مستودع الرياض" },

        orderProcessing: { en: "Order Processing", ar: "معالجة الطلب" },
        orderProcessingDate: { en: "July 12, 2025 - 2:15 PM", ar: "12 يوليو 2025 - 2:15 م" },
        orderProcessingDesc: { en: "Shipment prepared for shipping", ar: "تم تجهيز الشحنة للشحن" },

        inTransit: { en: "In Transit", ar: "في الطريق" },
        inTransitDate: { en: "July 13, 2025 - 9:00 AM", ar: "13 يوليو 2025 - 9:00 ص" },
        inTransitDesc: { en: "Shipment is on its way to final destination", ar: "الشحنة في طريقها إلى وجهتها النهائية" },

        delivered: { en: "Delivered", ar: "تسليم" },
        deliveredDate: { en: "Expected: July 14, 2025", ar: "متوقع: 14 يوليو 2025" },
        deliveredDesc: { en: "Shipment will be delivered during business day", ar: "سيتم تسليم الشحنة خلال يوم العمل" },

        // Order Details
        orderDetailsTitle: { en: "Shipment Details", ar: "تفاصيل الشحنة" },
        refNumberLabel: { en: "Reference Number:", ar: "رقم المرجع:" },
        shipDateLabel: { en: "Ship Date:", ar: "تاريخ الشحن:" },
        shipDateValue: { en: "July 12, 2025", ar: "12 يوليو 2025" },
        weightLabel: { en: "Weight:", ar: "الوزن:" },
        weightValue: { en: "25 kg", ar: "25 كجم" },
        fromLabel: { en: "From:", ar: "من:" },
        fromValue: { en: "Riyadh, Saudi Arabia", ar: "الرياض، المملكة العربية السعودية" },
        toLabel: { en: "To:", ar: "إلى:" },
        toValue: { en: "Jeddah, Saudi Arabia", ar: "جدة، المملكة العربية السعودية" },
        serviceTypeLabel: { en: "Service Type:", ar: "نوع الخدمة:" },
        serviceTypeValue: { en: "Express Land Shipping", ar: "الشحن البري السريع" },

        trackAnotherBtn: { en: "Track Another Shipment", ar: "تتبع شحنة أخرى" },

        // About Section
        aboutTitle: { en: "Dan Logistics Services", ar: "شركة دعن للخدمات اللوجستية" },
        aboutLead: { en: "Leader in integrated logistics solutions", ar: "رائدة في مجال الحلول اللوجستية المتكاملة" },
        aboutPara1: {
            en: "Dan Logistics Services was established in 2024 as a leading company in transportation, shipping and logistics in the Kingdom of Saudi Arabia. Since our establishment, we have been working hard to build a strong reputation as a trusted logistics partner, by providing comprehensive services that meet our customers' aspirations. We are proud to provide integrated logistics services that meet the diverse needs of our customers from small and medium enterprises to large companies and government institutions. We believe that every shipment carries a success story, and we strive to achieve these successes through our innovative and effective solutions.",
            ar: "تأسست شركة دعن للخدمات اللوجستية عام 2024م كشركة رائدة في مجال النقل والشحن واللوجستيات في المملكة العربية السعودية. منذ تأسيسنا، ونحن نعمل جاهدين على بناء سمعة قوية كشريك لوجستي موثوق به، من خلال تقديم خدمات شاملة تلبي تطلعات عملائنا. نحن نفخر بتقديم خدمات لوجستية متكاملة تلبي احتياجات عملائنا المتنوعة من الشركات الصغيرة والمتوسطة إلى الشركات الكبرى والمؤسسات الحكومية. نحن نؤمن بأن كل شحنة تحمل قصة نجاح، ونسعى لتحقيق هذه النجاحات من خلال حلولنا المبتكرة والفعالة."
        },
        aboutPara2: {
            en: "We are committed to providing the latest and best logistics solutions that ensure goods arrive on time and with the highest standards of safety and quality, based on an ambitious vision and a highly efficient team. Our team includes a select group of experts in all logistics fields, from strategic planning to precise execution, ensuring smooth and effective operations. We use the latest technologies to ensure continuous tracking and risk management, and we always strive to exceed your expectations and add value to your business.",
            ar: "نحن ملتزمون بتقديم أحدث وأفضل الحلول اللوجستية التي تضمن وصول البضائع في الوقت المحدد وبأعلى معايير الأمان والجودة، مستندين إلى رؤية طموحة وفريق عمل ذو كفاءة عالية. فريقنا يضم نخبة من الخبراء في جميع مجالات اللوجستيات، من التخطيط الاستراتيجي إلى التنفيذ الدقيق، مما يضمن سلاسة وفعالية جميع عملياتنا. نحن نستخدم أحدث التقنيات لضمان التتبع المستمر وإدارة المخاطر، ونسعى دائمًا لتجاوز توقعاتكم وتقديم قيمة مضافة لأعمالكم."
        },

        // Vision, Mission, Values
        visionTitle: { en: "Our Vision", ar: "رؤيتنا" },
        visionText: {
            en: "To be the leading company in logistics services in the region, and contribute to the development of the transport and shipping sector by providing innovative and reliable solutions. We look forward to building a sustainable logistics future based on modern technologies and environmentally friendly practices, making Dan Logistics Services a model to be emulated in efficiency and innovation.",
            ar: "أن نكون الشركة الرائدة في مجال الخدمات اللوجستية في المنطقة، ونساهم في تطوير قطاع النقل والشحن من خلال تقديم حلول مبتكرة وموثوقة. نتطلع إلى بناء مستقبل لوجستي مستدام يعتمد على التقنيات الحديثة والممارسات الصديقة للبيئة، لتكون دعن للخدمات اللوجستية نموذجًا يحتذى به في الكفاءة والابتكار."
        },

        missionTitle: { en: "Our Mission", ar: "مهمتنا" },
        missionText: {
            en: "To provide high-quality logistics services that meet our customers' needs and exceed their expectations, while adhering to the highest standards of safety, speed and efficiency. We work hard to understand each customer's requirements and provide customized solutions that ensure their business goals are achieved, while maintaining operational excellence at all stages of the supply chain.",
            ar: "تقديم خدمات لوجستية عالية الجودة تلبي احتياجات عملائنا وتتجاوز توقعاتهم، مع الالتزام بأعلى معايير الأمان والسرعة والكفاءة. نحن نعمل جاهدين على فهم متطلبات كل عميل وتقديم حلول مخصصة تضمن تحقيق أهدافهم التجارية، مع الحفاظ على التميز التشغيلي في جميع مراحل سلسلة التوريد."
        },

        valuesTitle: { en: "Our Values", ar: "قيمنا" },
        valuesText: {
            en: "Trust, quality, innovation, and commitment. We believe in the importance of building long-term relationships with our customers and partners based on mutual trust. We embrace transparency in all our dealings, are committed to social responsibility, and always strive for continuous improvement and learning to provide the best we have.",
            ar: "الثقة، الجودة، الابتكار، والالتزام. نؤمن بأهمية بناء علاقات طويلة الأمد مع عملائنا وشركائنا القائمة على الثقة المتبادلة. نحن نتبنى الشفافية في جميع تعاملاتنا، ونلتزم بالمسؤولية الاجتماعية، ونسعى دائمًا للتحسين المستمر والتعلم لتقديم أفضل ما لدينا."
        },

        // Services Overview
        servicesOverviewTitle: { en: "Comprehensive Logistics Solutions", ar: "حلول لوجستية شاملة" },
        servicesOverviewSubtitle: { en: "We provide an integrated range of logistics services that meet all your needs", ar: "نقدم مجموعة متكاملة من الخدمات اللوجستية التي تلبي جميع احتياجاتك" },

        // Land Shipping Service
        landShippingTitle: { en: "Land Shipping", ar: "الشحن البري" },
        landShippingDesc: { en: "Fast and safe land shipping services throughout the Kingdom and Gulf countries with guaranteed delivery on time.", ar: "خدمات الشحن البري السريعة والآمنة لجميع أنحاء المملكة ودول الخليج مع ضمان الوصول في الوقت المحدد." },
        landFeature1: { en: "24/7 shipment tracking", ar: "تتبع الشحنات على مدار الساعة" },
        landFeature2: { en: "Modern and equipped fleet", ar: "أسطول حديث ومجهز" },
        landFeature3: { en: "Comprehensive insurance on goods", ar: "تأمين شامل على البضائع" },
        landLearnMore: { en: "Read more", ar: "اعرف المزيد" },

        // Sea Shipping Service
        seaShippingTitle: { en: "Sea Shipping", ar: "الشحن البحري" },
        seaShippingDesc: { en: "Economic sea shipping solutions for heavy goods and large shipments with an extensive network of global ports.", ar: "حلول الشحن البحري الاقتصادية للبضائع الثقيلة والشحنات الكبيرة مع شبكة واسعة من الموانئ العالمية." },
        seaFeature1: { en: "Full and partial container shipping", ar: "شحن الحاويات الكاملة والجزئية" },
        seaFeature2: { en: "Customs clearance services", ar: "خدمات التخليص الجمركي" },
        seaFeature3: { en: "Extensive global coverage", ar: "تغطية عالمية واسعة" },
        seaLearnMore: { en: "Read more", ar: "اعرف المزيد" },

        // Air Shipping Service
        airShippingTitle: { en: "Air Shipping", ar: "الشحن الجوي" },
        airShippingDesc: { en: "Fast air shipping services for urgent goods and sensitive materials with guaranteed speed and safety.", ar: "خدمات الشحن الجوي السريع للبضائع العاجلة والمواد الحساسة مع ضمان السرعة والأمان." },
        airFeature1: { en: "Fast delivery within 24-48 hours", ar: "تسليم سريع خلال 24-48 ساعة" },
        airFeature2: { en: "Special handling for sensitive goods", ar: "مناولة خاصة للبضائع الحساسة" },
        airFeature3: { en: "Global airport network", ar: "شبكة مطارات عالمية" },
        airLearnMore: { en: "Read more", ar: "اعرف المزيد" },

        // Warehousing Service
        warehousingTitle: { en: "Warehousing", ar: "التخزين" },
        warehousingDesc: { en: "Safe storage facilities equipped with the latest technologies for goods preservation with advanced inventory management systems.", ar: "مرافق تخزين آمنة ومجهزة بأحدث التقنيات لحفظ البضائع مع أنظمة إدارة المخزون المتطورة." },
        warehouseFeature1: { en: "Flexible storage spaces", ar: "مساحات تخزين مرنة" },
        warehouseFeature2: { en: "Advanced security systems", ar: "أنظمة أمان متقدمة" },
        warehouseFeature3: { en: "Electronic inventory management", ar: "إدارة المخزون الإلكترونية" },
        warehouseLearnMore: { en: "Read more", ar: "اعرف المزيد" },

        // Packaging Service
        packagingTitle: { en: "Packaging", ar: "التعبئة والتغليف" },
        packagingDesc: { en: "Specialized packaging services to protect goods during transport using the best materials.", ar: "خدمات التعبئة والتغليف المتخصصة لحماية البضائع أثناء النقل مع استخدام أفضل المواد." },
        packagingFeature1: { en: "High-quality packaging materials", ar: "مواد تغليف عالية الجودة" },
        packagingFeature2: { en: "Custom packaging by goods type", ar: "تغليف مخصص حسب نوع البضاعة" },
        packagingFeature3: { en: "Complete protection guarantee", ar: "ضمان الحماية الكاملة" },
        packagingRequest: { en: "Request Service", ar: "اطلب الخدمة" },

        // Customs Service
        customsTitle: { en: "Customs Services", ar: "الخدمات الجمركية" },
        customsDesc: { en: "Customs procedures and clearance processing quickly and accurately with a team of specialized experts.", ar: "إنجاز المعاملات الجمركية والتخليص الجمركي بسرعة ودقة مع فريق من الخبراء المتخصصين." },
        customsFeature1: { en: "Fast customs clearance", ar: "تخليص جمركي سريع" },
        customsFeature2: { en: "Specialized customs consultations", ar: "استشارات جمركية متخصصة" },
        customsFeature3: { en: "Government procedures follow-up", ar: "متابعة المعاملات الحكومية" },
        customsRequest: { en: "Request Service", ar: "اطلب الخدمة" },

        // Why Choose Us
        whyChooseTitle: { en: "Why Choose Our Services?", ar: "لماذا تختار خدماتنا؟" },
        whyChooseSubtitle: { en: "Features that make us the best choice for your logistics needs", ar: "مميزات تجعلنا الخيار الأفضل لاحتياجاتك اللوجستية" },

        // Features
        onTimeTitle: { en: "On-Time Delivery", ar: "التسليم في الوقت المحدد" },
        onTimeDesc: { en: "We guarantee your shipments arrive on schedule with 99% accuracy", ar: "نضمن وصول شحناتك في المواعيد المحددة بدقة 99%" },

        securityTitle: { en: "Security & Protection", ar: "أمان وحماية" },
        securityDesc: { en: "Highest levels of security and comprehensive insurance on all shipments", ar: "أعلى مستويات الأمان والتأمين الشامل على جميع الشحنات" },

        pricingTitle: { en: "Competitive Pricing", ar: "أسعار تنافسية" },
        pricingDesc: { en: "Best market prices with high quality service", ar: "أفضل الأسعار في السوق مع جودة عالية في الخدمة" },

        supportTitle: { en: "24/7 Support", ar: "دعم 24/7" },
        supportDesc: { en: "Customer service team available 24/7 to help you", ar: "فريق خدمة العملاء متاح على مدار الساعة لمساعدتك" },

        // Achievements
        achievementsTitle: { en: "Our Achievements", ar: "إنجازاتنا" },
        achievementsSubtitle: { en: "Numbers that speak of our success", ar: "أرقام تتحدث عن نجاحنا" },

        satisfiedCustomers: { en: "Satisfied Customers", ar: "عميل راضي" },
        annualShipments: { en: "Annual Shipments", ar: "شحنة سنوياً" },
        countriesServed: { en: "Countries Worldwide", ar: "دولة حول العالم" },
        yearsExperience: { en: "Years of Experience", ar: "سنة خبرة" },

        // CTA Section
        ctaTitle: { en: "Need Reliable Logistics Services?", ar: "هل تحتاج إلى خدمات لوجستية موثوقة؟" },
        ctaSubtitle: { en: "Contact us today and get a free consultation and customized quote", ar: "تواصل معنا اليوم واحصل على استشارة مجانية وعرض سعر مخصص" },
        callNowBtn: { en: "Call Now", ar: "اتصل بنا الآن" },

        // Footer
        footerDescription: {
            en: "Your trusted partner in integrated logistics solutions. We provide high-quality shipping, transport and warehousing services. We are committed to supporting your business growth by providing innovative and efficient logistics solutions that ensure your goods reach their destination safely and efficiently.",
            ar: "شريكك الموثوق في الحلول اللوجستية المتكاملة. نقدم خدمات عالية الجودة في الشحن والنقل والتخزين. نحن ملتزمون بدعم نمو أعمالك من خلال توفير حلول لوجستية مبتكرة وفعالة تضمن وصول بضائعك إلى وجهتها بأمان وكفاءة."
        },

        quickLinksTitle: { en: "Quick Links", ar: "الروابط السريعة" },
        servicesTitle: { en: "Our Services", ar: "خدماتنا" },
        contactInfoTitle: { en: "Contact Information", ar: "معلومات التواصل" },

        // Contact Information
        addressText: { en: "Riyadh, Qurtuba District, Saudi Arabia", ar: "الرياض، حي قرطبة، المملكة العربية السعودية" },
        phoneNumber: { en: "011 275 8699", ar: "011 275 8699" },
        emailAddress: { en: "info@danlogistics.com", ar: "info@danlogistics.com" },
        workingHours: { en: "Saturday - Thursday: 8:00 - 18:00", ar: "السبت - الخميس: 8:00 - 18:00" },

        // Copyright
        copyrightText: { en: "Dan Logistics Services. All rights reserved.", ar: "دعن للخدمات اللوجستية. جميع الحقوق محفوظة." },
        designedBy: { en: "Designed by", ar: "صمم بواسطة" },

        // Tracking Page Hero Section
        trackingHeroTitle: { en: "Track Your Shipment", ar: "تتبع شحنتك" },
        trackingHeroSubtitle: { en: "Enter your tracking number to get the latest information about your shipment's status.", ar: "أدخل رقم التتبع الخاص بك للحصول على أحدث المعلومات حول حالة شحنتك." }
        , // About Page Hero Section
        aboutHeroTitle: { en: "About Us", ar: "من نحن" },
        aboutHeroSubtitle: {
            en: "Dan Logistic Services - Our vision is to be the optimal partner in the world of transportation and delivery in Saudi Arabia and the region, by providing integrated and innovative logistics solutions. We are committed to achieving the highest levels of efficiency and reliability in our diverse clients' supply chains, with a constant eye on the future and meeting evolving market needs.",
            ar: "شركة دعن للخدمات اللوجستية - رؤيتنا أن نكون الشريك الأمثل في عالم النقل والتوصيل بالمملكة العربية السعودية والمنطقة، من خلال تقديم حلول لوجستية متكاملة ومبتكرة. نلتزم بتحقيق أعلى مستويات الكفاءة والموثوقية في سلاسل الإمداد لعملائنا المتنوعين، مع التطلع الدائم للمستقبل وتلبية احتياجات السوق المتطورة."
        },

        // About Content Section
        aboutSectionTitle: { en: "Dan Logistic Services Company", ar: "شركة دعن للخدمات اللوجستية" },
        aboutLeadParagraph: { en: "Leading in Integrated Logistics Solutions", ar: "رائدة في مجال الحلول اللوجستية المتكاملة" },
        aboutSubLeadParagraph1: {
            en: "Dan Logistic Services Company was established in 2024 as a leading company in the field of transportation, shipping, and logistics in the Kingdom of Saudi Arabia. Since our establishment, we have been striving to build a strong reputation as a reliable logistics partner by providing comprehensive services that meet our clients' aspirations. We are proud to offer integrated logistics services that cater to the diverse needs of our clients, from small and medium-sized enterprises to large corporations and government institutions. We believe that every shipment carries a success story, and we strive to achieve these successes through our innovative and effective solutions.",
            ar: "تأسست شركة دعن للخدمات اللوجستية عام 2024م كشركة رائدة في مجال النقل والشحن واللوجستيات في المملكة العربية السعودية. منذ تأسيسنا، ونحن نعمل جاهدين على بناء سمعة قوية كشريك لوجستي موثوق به، من خلال تقديم خدمات شاملة تلبي تطلعات عملائنا. نحن نفخر بتقديم خدمات لوجستية متكاملة تلبي احتياجات عملائنا المتنوعة من الشركات الصغيرة والمتوسطة إلى الشركات الكبرى والمؤسسات الحكومية. نحن نؤمن بأن كل شحنة تحمل قصة نجاح، ونسعى لتحقيق هذه النجاحات من خلال حلولنا المبتكرة والفعالة."
        },
        aboutSubLeadParagraph2: {
            en: "We are committed to providing the latest and best logistics solutions that ensure goods arrive on time and with the highest standards of safety and quality, based on an ambitious vision and a highly efficient team. Our team includes a selection of experts in all areas of logistics, from strategic planning to precise execution, ensuring the smoothness and effectiveness of all our operations. We use the latest technologies to ensure continuous tracking and risk management, and we always strive to exceed your expectations and add value to your business.",
            ar: "نحن ملتزمون بتقديم أحدث وأفضل الحلول اللوجستية التي تضمن وصول البضائع في الوقت المحدد وبأعلى معايير الأمان والجودة، مستندين إلى رؤية طموحة وفريق عمل ذو كفاءة عالية. فريقنا يضم نخبة من الخبراء في جميع مجالات اللوجستيات، من التخطيط الاستراتيجي إلى التنفيذ الدقيق، مما يضمن سلاسة وفعالية جميع عملياتنا. نحن نستخدم أحدث التقنيات لضمان التتبع المستمر وإدارة المخاطر، ونسعى دائمًا لتجاوز توقعاتكم وتقديم قيمة مضافة لأعمالكم."
        },

        // Vision, Mission, Values Section
        visionTitle: { en: "Our Vision", ar: "رؤيتنا" },
        visionContent: {
            en: "To be the leading company in logistics services in the region, contributing to the development of the transportation and shipping sector by providing innovative and reliable solutions. We aim to build a sustainable logistics future based on modern technologies and environmentally friendly practices, making Dan Logistic Services a role model for efficiency and innovation.",
            ar: "أن نكون الشركة الرائدة في مجال الخدمات اللوجستية في المنطقة، ونساهم في تطوير قطاع النقل والشحن من خلال تقديم حلول مبتكرة وموثوقة. نتطلع إلى بناء مستقبل لوجستي مستدام يعتمد على التقنيات الحديثة والممارسات الصديقة للبيئة، لتكون دعن للخدمات اللوجستية نموذجًا يحتذى به في الكفاءة والابتكار."
        },
        missionTitle: { en: "Our Mission", ar: "مهمتنا" },
        missionContent: {
            en: "To provide high-quality logistics services that meet and exceed our clients' expectations, while adhering to the highest standards of safety, speed, and efficiency. We work diligently to understand each client's requirements and provide customized solutions that ensure their business objectives are met, while maintaining operational excellence throughout all stages of the supply chain.",
            ar: "تقديم خدمات لوجستية عالية الجودة تلبي احتياجات عملائنا وتتجاوز توقعاتهم، مع الالتزام بأعلى معايير الأمان والسرعة والكفاءة. نحن نعمل جاهدين على فهم متطلبات كل عميل وتقديم حلول مخصصة تضمن تحقيق أهدافهم التجارية، مع الحفاظ على التميز التشغيلي في جميع مراحل سلسلة التوريد."
        },
        valuesTitle: { en: "Our Values", ar: "قيمنا" },
        valuesContent: {
            en: "Trust, Quality, Innovation, and Commitment. We believe in building long-term relationships with our clients and partners based on mutual trust. We embrace transparency in all our dealings, are committed to social responsibility, and constantly strive for continuous improvement and learning to deliver our best.",
            ar: "الثقة، الجودة، الابتكار، والالتزام. نؤمن بأهمية بناء علاقات طويلة الأمد مع عملائنا وشركائنا القائمة على الثقة المتبادلة. نحن نتبنى الشفافية في جميع تعاملاتنا، ونلتزم بالمسؤولية الاجتماعية، ونسعى دائمًا للتحسين المستمر والتعلم لتقديم أفضل ما لدينا."
        },

        // Contact Page Hero Section
        contactHeroTitle: { en: "Contact Us", ar: "اتصل بنا" },
        contactHeroSubtitle1: {
            en: "We are here to help you and provide the best logistics solutions that meet your business needs. Whether you have inquiries about shipping, warehousing, packing and packaging, or customs services, our specialized team is always ready to provide technical support and comprehensive consultations.",
            ar: "نحن هنا لمساعدتك وتقديم أفضل الحلول اللوجستية التي تلبي احتياجات عملك. سواء كانت لديك استفسارات حول الشحن، التخزين، التعبئة والتغليف، أو الخدمات الجمركية، فإن فريقنا المتخصص مستعد دائمًا لتقديم الدعم الفني والاستشارات الشاملة."
        },
        contactHeroSubtitle2: {
            en: "Contact us now for customized quotes, to inquire about your shipment's status, or even to request urgent assistance. You can reach us by phone, email, or by visiting our office. We believe that effective communication is key to success, and we always strive to build strong and sustainable relationships with our clients.",
            ar: "تواصل معنا الآن للحصول على عروض أسعار مخصصة، أو للاستفسار عن حالة شحنتك، أو حتى لطلب مساعدة عاجلة. يمكنك الوصول إلينا عبر الهاتف، البريد الإلكتروني، أو زيارة مكتبنا. نحن نؤمن بأن التواصل الفعال هو مفتاح النجاح، ونسعى دائمًا لبناء علاقات قوية ومستدامة مع عملائنا."
        },
        contactHeroSubtitle3: {
            en: "Let us be your trusted partner in your logistics journey, and rest assured that your goods are in safe hands and will reach their destination safely and on time.",
            ar: "دعنا نكون شريكك الموثوق في رحلة عملك اللوجستية، وكن على ثقة بأن بضائعك في أيدٍ أمينة وستصل إلى وجهتها بأمان وفي الوقت المحدد."
        },

        // Main Contact Section
        contactSectionTitle: { en: "Get in Touch", ar: "تواصل معنا" },
        contactSectionSubtitle: { en: "We are here to serve you, contact us anytime", ar: "نحن هنا لخدمتك، تواصل معنا في أي وقت" },
        contactLocationTitle: { en: "Headquarters", ar: "المقر الرئيسي" },
        contactLocationDetails: { en: "Riyadh, Qurtubah District, Saudi Arabia", ar: "الرياض، حي قرطبة، المملكة العربية السعودية" },
        contactPhoneTitle: { en: "Phone", ar: "الهاتف" },
        contactEmailTitle: { en: "Email", ar: "البريد الإلكتروني" },
        contactEmailDetails: { en: "info@danlogistics.com<br>sales@danlogistics.com", ar: "info@danlogistics.com<br>sales@danlogistics.com" }, // Keep as is for emails
        contactHoursTitle: { en: "Working Hours", ar: "ساعات العمل" },
        contactHoursDetails: { en: "Saturday - Thursday: 8:00 - 18:00 Friday: Closed", ar: "السبت - الخميس: 8:00 - 18:00 الجمعة : مغلق" },
        contactCustomerServiceTitle: { en: "Customer Service", ar: "خدمة العملاء" },
        contactCustomerServiceDetails: { en: "Available 24/7", ar: "متاح 24/7" },

        // Quick Contact Buttons
        quickContactTitle: { en: "Quick Contact", ar: "تواصل سريع" },
        callNowButton: { en: " Call Now ", ar: "اتصل الآن" },
        sendEmailButton: { en: " Send Email ", ar: "أرسل إيميل" },
        whatsappButton: { en: " WhatsApp ", ar: "واتساب" },

        // Map Section
        mapSectionTitle: { en: "Our Location on the Map", ar: "موقعنا على الخريطة" },

        // FAQ Section
        faqSectionTitle: { en: "Frequently Asked Questions", ar: "الأسئلة الشائعة" },
        faqSectionSubtitle: { en: "Answers to the most common questions", ar: "إجابات على أكثر الأسئلة شيوعاً" },

        // FAQ Items
        faq1Question: { en: "How long does ground shipping take within the Kingdom?", ar: "كم يستغرق الشحن البري داخل المملكة؟" },
        faq1Answer: { en: "Ground shipping within the Kingdom takes 1-3 working days depending on distance and destination. We provide live tracking service for all shipments.", ar: "يستغرق الشحن البري داخل المملكة من 1-3 أيام عمل حسب المسافة والوجهة. نوفر خدمة التتبع المباشر لجميع الشحنات." },

        faq2Question: { en: "Do you offer shipment insurance?", ar: "هل تقدمون خدمة التأمين على الشحنات؟" },
        faq2Answer: { en: "Yes, we offer comprehensive insurance on all shipments up to 100% of the value of the shipped goods.", ar: "نعم، نقدم تأمين شامل على جميع الشحنات بقيمة تصل إلى 100% من قيمة البضاعة المشحونة." },

        faq3Question: { en: "How can I track my shipment?", ar: "كيف يمكنني تتبع شحنتي؟" },
        faq3Answer: { en: "You can track your shipment through our website or mobile application using the shipment number sent to you.", ar: "يمكنك تتبع شحنتك من خلال موقعنا الإلكتروني أو تطبيق الهاتف المحمول باستخدام رقم الشحنة المرسل إليك." },

        faq4Question: { en: "What are the available payment methods?", ar: "ما هي طرق الدفع المتاحة؟" },
        faq4Answer: { en: "We accept cash on delivery, bank transfer, credit cards, and electronic payments through various platforms.", ar: "نقبل الدفع نقداً عند الاستلام، التحويل البنكي، البطاقات الائتمانية، والدفع الإلكتروني عبر منصات مختلفة." }
        ,
        // All Services Page Hero Section
        servicesHeroTitle: { en: "All Services", ar: "جميع الخدمات" },
        servicesHeroSubtitle: {
            en: "Discover our full range of integrated logistics solutions designed to meet all your business needs, from fast and secure shipping to advanced warehousing and specialized customs services. We ensure smoothness and efficiency every step of the way.",
            ar: "اكتشف مجموعتنا الكاملة من الحلول اللوجستية المتكاملة المصممة لتلبية كافة احتياجات عملك من الشحن السريع والآمن إلى التخزين المتقدم والخدمات الجمركية المتخصصة. نضمن لك سلاسة وكفاءة في كل خطوة."
        },

        // Services Overview Section
        servicesOverviewTitle: { en: "Comprehensive Logistics Solutions", ar: "حلول لوجستية شاملة" },
        servicesOverviewSubtitle: {
            en: "We offer a comprehensive range of integrated logistics services that meet all your needs and support your business growth with high efficiency and effectiveness.",
            ar: "نقدم مجموعة متكاملة من الخدمات اللوجستية التي تلبي جميع احتياجاتك وتدعم نمو أعمالك بكفاءة وفعالية عالية."
        },

        // Land Shipping Card
        landShippingCardTitle: { en: "Land Shipping", ar: "الشحن البري" },
        landShippingCardText: {
            en: "Fast and secure land shipping services to all parts of the Kingdom and Gulf countries, ensuring on-time arrival. We have a vast fleet of modern and diverse trucks to ensure safe and efficient transportation for all types of goods, from small shipments to heavy and oversized cargo.",
            ar: "خدمات الشحن البري السريعة والآمنة لجميع أنحاء المملكة ودول الخليج مع ضمان الوصول في الوقت المحدد. نمتلك أسطولًا ضخمًا من الشاحنات الحديثة والمتنوعة لضمان نقل آمن وفعال لجميع أنواع البضائع، من الشحنات الصغيرة إلى البضائع الثقيلة وكبيرة الحجم."
        },
        landShippingFeature1: { en: "24/7 shipment tracking via advanced GPS systems.", ar: "تتبع الشحنات على مدار الساعة عبر أنظمة GPS متطورة." },
        landShippingFeature2: { en: "Modern fleet equipped with the best transportation technologies.", ar: "أسطول حديث ومجهز بأفضل تقنيات النقل." },
        landShippingFeature3: { en: "Comprehensive insurance on goods to protect them from any unexpected risks.", ar: "تأمين شامل على البضائع لحمايتها من أي مخاطر غير متوقعة." },
        landShippingFeature4: { en: "Refrigerated transport solutions for sensitive goods.", ar: "حلول نقل مبردة للبضائع الحساسة." },
        landShippingReadMore: { en: "Read More", ar: "اعرف المزيد" },

        // Sea Shipping Card
        seaShippingCardTitle: { en: "Sea Shipping", ar: "الشحن البحري" },
        seaShippingCardText: {
            en: "Economical sea freight solutions for heavy goods and large shipments with a wide network of global ports. We offer flexible options for Full Container Load (FCL) and Less than Container Load (LCL) shipping to suit all sizes and budgets, committed to international deadlines.",
            ar: "حلول الشحن البحري الاقتصادية للبضائع الثقيلة والشحنات الكبيرة مع شبكة واسعة من الموانئ العالمية. نقدم خيارات مرنة للشحن بالحاويات الكاملة (FCL) والجزئية (LCL) لتناسب جميع الأحجام والميزانيات، مع الالتزام بالمواعيد النهائية العالمية."
        },
        seaShippingFeature1: { en: "Full and partial container shipping at competitive prices.", ar: "شحن الحاويات الكاملة والجزئية بأسعار تنافسية." },
        seaShippingFeature2: { en: "Customs clearance services at international and local ports.", ar: "خدمات التخليص الجمركي في الموانئ العالمية والمحلية." },
        seaShippingFeature3: { en: "Extensive global coverage to reach any sea destination.", ar: "تغطية عالمية واسعة للوصول إلى أي وجهة بحرية." },
        seaShippingFeature4: { en: "Customized shipping solutions for major projects.", ar: "حلول شحن مخصصة للمشاريع الكبرى." },
        seaShippingReadMore: { en: "Read More", ar: "اعرف المزيد" },

        // Air Shipping Card
        airShippingCardTitle: { en: "Air Shipping", ar: "الشحن الجوي" },
        airShippingCardText: {
            en: "Fast air freight services for urgent goods and sensitive materials, ensuring speed and security. We offer cost- and time-effective solutions for shipments requiring high speed, with attention to every detail to ensure their excellent condition upon arrival.",
            ar: "خدمات الشحن الجوي السريع للبضائع العاجلة والمواد الحساسة مع ضمان السرعة والأمان. نقدم حلولًا فعالة من حيث التكلفة والوقت للشحنات التي تتطلب سرعة فائقة، مع الاهتمام بأدق التفاصيل لضمان وصولها بحالة ممتازة."
        },
        airShippingFeature1: { en: "Fast delivery within 24-48 hours for urgent shipments.", ar: "تسليم سريع خلال 24-48 ساعة للشحنات العاجلة." },
        airShippingFeature2: { en: "Special handling for sensitive and valuable goods.", ar: "مناولة خاصة للبضائع الحساسة والقيمة." },
        airShippingFeature3: { en: "Global airport network ensuring reach to any location.", ar: "شبكة مطارات عالمية تضمن الوصول لأي مكان." },
        airShippingFeature4: { en: "Refrigerated air freight solutions.", ar: "حلول الشحن المبرد جوًا." },
        airShippingReadMore: { en: "Read More", ar: "اعرف المزيد" },

        // Warehousing Card
        warehousingCardTitle: { en: "Warehousing", ar: "التخزين" },
        warehousingCardText: {
            en: "Secure and equipped storage facilities with the latest technologies for goods storage and advanced inventory management systems. Our warehouses provide a fully controlled environment for temperature and humidity, ensuring product quality, in addition to customs warehousing and temporary storage services.",
            ar: "مرافق تخزين آمنة ومجهزة بأحدث التقنيات لحفظ البضائع مع أنظمة إدارة المخزون المتطورة. توفر مستودعاتنا بيئة تحكم كاملة في درجة الحرارة والرطوبة، مما يضمن الحفاظ على جودة المنتجات، بالإضافة إلى خدمات التخزين الجمركي والتخزين المؤقت."
        },
        warehousingFeature1: { en: "Flexible storage spaces suitable for all sizes and types.", ar: "مساحات تخزين مرنة تناسب جميع الأحجام والأنواع." },
        warehousingFeature2: { en: "Advanced security systems and 24/7 surveillance cameras.", ar: "أنظمة أمان متقدمة وكاميرات مراقبة 24/7." },
        warehousingFeature3: { en: "Electronic inventory management for accurate and efficient control.", ar: "إدارة المخزون الإلكترونية لتحكم دقيق وفعال." },
        warehousingFeature4: { en: "Packing and packaging services within warehouses.", ar: "خدمات التعبئة والتغليف داخل المستودعات." },
        warehousingReadMore: { en: "Read More", ar: "اعرف المزيد" },

        // Packaging & Packaging Card
        packagingCardTitle: { en: "Packing and Packaging", ar: "التعبئة والتغليف" },
        packagingCardText: {
            en: "Specialized packing and packaging services to protect goods during transit using the best materials. Whether your goods are fragile, delicate, or require special protection, our trained team uses the latest techniques and materials to ensure their safety until they reach their final destination.",
            ar: "خدمات التعبئة والتغليف المتخصصة لحماية البضائع أثناء النقل مع استخدام أفضل المواد. سواء كانت بضائعك حساسة، قابلة للكسر، أو تحتاج إلى حماية خاصة، فإن فريقنا المدرب يستخدم أحدث التقنيات والمواد لضمان سلامتها حتى وصولها إلى وجهتها النهائية."
        },
        packagingFeature1: { en: "High-quality and environmentally friendly packaging materials.", ar: "مواد تغليف عالية الجودة وصديقة للبيئة." },
        packagingFeature2: { en: "Custom packaging according to goods type, size, and shipping requirements.", ar: "تغليف مخصص حسب نوع البضاعة وحجمها ومتطلبات الشحن." },
        packagingFeature3: { en: "Full protection guarantee against shocks and pressures.", ar: "ضمان الحماية الكاملة ضد الصدمات والضغوط." },
        packagingFeature4: { en: "Industrial and commercial packing and packaging solutions.", ar: "حلول تعبئة وتغليف صناعية وتجارية." },
        packagingRequestService: { en: "Request Service", ar: "اطلب الخدمة" },

        // Customs Services Card
        customsCardTitle: { en: "Customs Services", ar: "الخدمات الجمركية" },
        customsCardText: {
            en: "Expedited customs transactions and clearance with speed and accuracy, handled by a team of specialized experts. We offer integrated solutions to facilitate import and export processes, handling all legal procedures and required documents to ensure your goods pass smoothly and without delay.",
            ar: "إنجاز المعاملات الجمركية والتخليص الجمركي بسرعة ودقة مع فريق من الخبراء المتخصصين. نقدم حلولاً متكاملة لتسهيل عملية الاستيراد والتصدير، ونتعامل مع جميع الإجراءات القانونية والوثائق المطلوبة لضمان مرور بضائعك بسلاسة ودون تأخير."
        },
        customsFeature1: { en: "Fast customs clearance to reduce waiting time.", ar: "تخليص جمركي سريع لتقليل وقت الانتظار." },
        customsFeature2: { en: "Specialized customs consultations for compliance with all regulations.", ar: "استشارات جمركية متخصصة للامتثال لجميع اللوائح." },
        customsFeature3: { en: "Accurate and professional follow-up of government transactions.", ar: "متابعة المعاملات الحكومية بدقة واحترافية." },
        customsFeature4: { en: "Client representation before customs authorities.", ar: "تمثيل العملاء أمام الجهات الجمركية." },
        customsRequestService: { en: "Request Service", ar: "اطلب الخدمة" },

        // Why Choose Us Section
        whyChooseUsTitle: { en: "Why Choose Our Services?", ar: "لماذا تختار خدماتنا؟" },
        whyChooseUsSubtitle: {
            en: "Features that make us the best choice for your logistics needs and guarantee you a unique and reliable experience.",
            ar: "مميزات تجعلنا الخيار الأفضل لاحتياجاتك اللوجستية وتضمن لك تجربة فريدة وموثوقة."
        },
        feature1Title: { en: "On-Time Delivery", ar: "التسليم في الوقت المحدد" },
        feature1Content: { en: "We guarantee 99% on-time delivery of your shipments, providing you peace of mind and avoiding any undesirable delays.", ar: "نضمن وصول شحناتك في المواعيد المحددة بدقة 99% مما يوفر لك راحة البال ويجنبك أي تأخيرات غير مرغوبة." },
        feature2Title: { en: "Safety and Protection", ar: "أمان وحماية" },
        feature2Content: { en: "Highest levels of safety and comprehensive insurance for all shipments, with strict protocols applied to protect your goods.", ar: "أعلى مستويات الأمان والتأمين الشامل على جميع الشحنات مع تطبيق بروتوكولات صارمة لحماية بضائعك." },
        feature3Title: { en: "Competitive Prices", ar: "أسعار تنافسية" },
        feature3Content: { en: "Best prices in the market with high-quality service, ensuring excellent value for your investment.", ar: "أفضل الأسعار في السوق مع جودة عالية في الخدمة مما يضمن لك قيمة ممتازة مقابل استثمارك." },
        feature4Title: { en: "24/7 Support", ar: "دعم 24/7" },
        feature4Content: { en: "Our customer service team is available around the clock to assist you, answer all your inquiries, and provide technical support.", ar: "فريق خدمة العملاء متاح على مدار الساعة لمساعدتك والإجابة على جميع استفساراتك وتقديم الدعم الفني." },

        // CTA Section
        ctaTitle: { en: "Do you need a customized logistics service?", ar: "هل تحتاج إلى خدمة لوجستية مخصصة؟" },
        ctaSubtitle: {
            en: "Contact us today for a free consultation and customized solutions for your needs, and find out how we can be your optimal logistics partner.",
            ar: "تواصل معنا اليوم واحصل على استشارة مجانية وحلول مخصصة لاحتياجاتك ومعرفة كيف يمكننا أن نكون شريكك اللوجستي الأمثل."
        },
        ctaButton: { en: "Call Us Now", ar: "اتصل بنا الآن" },
        // Land Shipping Page Hero Section
        landShippingHeroTitle: { en: "Land Shipping", ar: "الشحن البري" },
        landShippingHeroSubtitle: {
            en: "Reliable and efficient land transportation solutions for your shipments, ensuring their safe and on-time arrival through our extensive network of roads in Saudi Arabia and the Gulf countries.",
            ar: "حلول نقل برية موثوقة وفعالة لشحناتك، تضمن وصولها بأمان وفي الوقت المحدد عبر شبكتنا الواسعة من الطرق البرية في المملكة العربية السعودية ودول الخليج."
        },
        exploreServicesButton: { en: "Explore Our Services", ar: "استكشف خدماتنا" },

        // Land Shipping Detail Content
        landShippingDetailTitle: { en: "Integrated Land Shipping Services", ar: "خدمات الشحن البري المتكاملة" },
        landShippingExplain1: {
            en: "We provide comprehensive land shipping services covering Saudi Arabia and the Arabian Gulf countries, focusing on speed, safety, and efficiency. At Dan Logistic Services, we understand the importance of land transportation in modern supply chains, which is why we have equipped our fleet with the latest technologies to ensure an unparalleled shipping experience.",
            ar: "نقدم خدمات شحن بري شاملة تغطي المملكة العربية السعودية ودول الخليج العربي، مع التركيز على السرعة والأمان والكفاءة. في دعن للخدمات اللوجستية، نفهم أهمية النقل البري في سلاسل الإمداد الحديثة، ولذلك قمنا بتجهيز أسطولنا بأحدث التقنيات لنضمن تجربة شحن لا مثيل لها."
        },
        landShippingExplain2: {
            en: "Whether you need Full Truckload (FTL) or Less than Truckload (LTL) transportation, we have the fleet and expertise to ensure your goods arrive safely and on time. We are distinguished by high flexibility and the ability to handle various types of shipments, from general cargo to hazardous and special materials, all while adhering to the highest safety and quality standards.",
            ar: "سواء كنت تحتاج إلى نقل حمولات كاملة (FTL) أو حمولات جزئية (LTL)، لدينا الأسطول والخبرة لضمان وصول بضائعك بأمان وفي الوقت المحدد. نتميز بالمرونة العالية والقدرة على التعامل مع مختلف أنواع الشحنات، من البضائع العامة إلى المواد الخطرة والخاصة، كل ذلك مع الالتزام بأعلى معايير السلامة والجودة."
        },
        landShippingDetailFeature1: {
            en: "Extensive coverage inside and outside the Kingdom: Our services extend to cover all major cities and regions in Saudi Arabia, in addition to a wide network covering GCC countries, ensuring your shipments reach any destination you desire.",
            ar: "تغطية واسعة داخل وخارج المملكة: خدماتنا تمتد لتشمل جميع المدن والمناطق الرئيسية في المملكة العربية السعودية، بالإضافة إلى شبكة واسعة تغطي دول مجلس التعاون الخليجي، مما يضمن وصول شحناتك إلى أي مكان تريده."
        },
        landShippingDetailFeature2: {
            en: "Advanced shipment tracking systems: You can track your shipments moment by moment via our advanced vehicle tracking (GPS) systems, providing you with complete transparency and peace of mind knowing the location of your goods at any time.",
            ar: "أنظمة تتبع متقدمة للشحنات: يمكنك تتبع شحناتك لحظة بلحظة عبر أنظمتنا المتطورة لتتبع المركبات (GPS)، مما يوفر لك الشفافية الكاملة وراحة البال لمعرفة موقع بضائعك في أي وقت."
        },
        landShippingDetailFeature3: {
            en: "Highly experienced and efficient drivers: Our team of drivers is trained to the highest level and possesses extensive experience in dealing with various logistical conditions, committed to safety and quality standards to ensure safe and efficient delivery.",
            ar: "سائقون ذوو خبرة وكفاءة عالية: فريق السائقين لدينا مدرب على أعلى مستوى ويمتلك خبرة واسعة في التعامل مع مختلف الظروف اللوجستية، ملتزمون بمعايير السلامة والجودة لضمان تسليم آمن وفعال."
        },
        landShippingDetailFeature4: {
            en: "Customized solutions for all types of goods: Whether it's sensitive goods, perishable items, heavy equipment, or any other type of shipment, we offer customized logistics solutions that meet your unique requirements and ensure optimal protection for your goods.",
            ar: "حلول مخصصة لجميع أنواع البضائع: سواء كانت بضائع حساسة، سلع سريعة التلف، معدات ثقيلة، أو أي نوع آخر من الشحنات، نقدم حلولًا لوجستية مخصصة تلبي متطلباتك الفريدة وتضمن الحماية المثلى لبضائعك."
        },
        requestQuoteButton: { en: "Request a Quote", ar: "اطلب عرض سعر" },

        // How Our Service Works Section
        howItWorksTitle: { en: "How Our Service Works?", ar: "كيف تعمل خدمتنا؟" },
        step1Title: { en: "1. Shipment Reception", ar: "1. استلام الشحنة" },
        step1Description: {
            en: "We receive your goods from your specified location, whether a warehouse or factory, and ensure their inspection and documentation before starting the transportation process. Your shipment is handled with utmost care from the first moment.",
            ar: "نقوم باستلام بضائعك من موقعك المحدد، سواء كان مستودعًا أو مصنعًا، ونتأكد من فحصها وتوثيق حالتها قبل البدء في عملية النقل. يتم التعامل مع شحنتك بعناية فائقة منذ اللحظة الأولى."
        },
        step2Title: { en: "2. Planning and Loading", ar: "2. التخطيط والتحميل" },
        step2Description: {
            en: "Our team of experts plans the best logistical routes to ensure speed and efficiency. Shipments are safely loaded into specially equipped trucks, taking into account the nature of the goods and their specific requirements to ensure their safety throughout the journey.",
            ar: "يقوم فريق الخبراء لدينا بتخطيط أفضل المسارات اللوجستية لضمان السرعة والكفاءة. يتم تحميل الشحنات بأمان داخل الشاحنات المجهزة خصيصًا، مع الأخذ في الاعتبار طبيعة البضائع ومتطلباتها الخاصة لضمان سلامتها طوال الرحلة."
        },
        step3Title: { en: "3. Tracking and Delivery", ar: "3. التتبع والتوصيل" },
        step3Description: {
            en: "You can track your shipment moment by moment using our advanced vehicle tracking systems. We deliver to the final destination on time, providing continuous updates on the shipment's status to ensure transparency and your peace of mind.",
            ar: "يمكنك تتبع شحنتك لحظة بلحظة باستخدام أنظمتنا المتطورة لتتبع المركبات. نقوم بالتوصيل إلى الوجهة النهائية في الوقت المحدد، مع تقديم تحديثات مستمرة عن حالة الشحنة لضمان الشفافية وراحة بالك."
        },

        // Land Shipping CTA Section
        landShippingCtaTitle: { en: "Ready to transport your goods by land efficiently and safely?", ar: "جاهز لنقل بضائعك براً بكفاءة وأمان؟" },
        landShippingCtaSubtitle: {
            en: "Let us help you achieve your logistics goals and provide customized land transportation solutions that meet all your needs.",
            ar: "دعنا نساعدك في تحقيق أهدافك اللوجستية وتوفير حلول نقل برية مخصصة تلبي جميع احتياجاتك."
        },
        landShippingCtaButton: { en: "Contact Us Now", ar: "تواصل معنا الآن" }
        ,
        // Sea Shipping Page Hero Section
        seaShippingHeroTitle: { en: "Sea Shipping", ar: "الشحن البحري" },
        seaShippingHeroSubtitle: {
            en: "Global and reliable sea freight solutions for your large shipments, providing efficiency and cost-effectiveness to reach any port worldwide, ensuring the highest levels of safety and quality.",
            ar: "حلول شحن بحري عالمية وموثوقة لشحناتك الكبيرة، توفر لك الكفاءة والتكلفة الفعالة للوصول إلى أي ميناء حول العالم، مع ضمان أعلى مستويات الأمان والجودة."
        },
        seaShippingExploreServicesButton: { en: "Explore Our Services", ar: "استكشف خدماتنا" },

        // Sea Shipping Detail Content
        seaShippingDetailTitle: { en: "Effective Sea Shipping Services", ar: "خدمات الشحن البحري الفعالة" },
        seaShippingExplain1: {
            en: "We offer customized sea freight solutions for full and less than container loads (FCL and LCL) through a wide network of global shipping lines. At Dan Logistic Services, we recognize that sea freight is the cornerstone of international trade, which is why we provide integrated services to ensure the smooth and safe passage of your shipments across oceans.",
            ar: "نقدم حلول شحن بحري مخصصة للحمولات الكبيرة والصغيرة (FCL و LCL) عبر شبكة واسعة من الخطوط الملاحية العالمية. في دعن للخدمات اللوجستية، ندرك أن الشحن البحري هو حجر الزاوية للتجارة الدولية، ولذلك نقدم خدمات متكاملة تضمن سلاسة وأمان شحناتك عبر المحيطات."
        },
        seaShippingExplain2: {
            en: "We guarantee competitive prices, reliable schedules, and complete management of sea freight operations from start to finish. This includes handling all logistical and customs procedures, saving you time and effort and ensuring your goods reach their final destination efficiently.",
            ar: "نضمن لك أسعارًا تنافسية، جداول زمنية موثوقة، وإدارة كاملة لعمليات الشحن البحري من البداية حتى النهاية. يشمل ذلك التعامل مع جميع الإجراءات اللوجستية والجمركية، مما يوفر عليك الوقت والجهد ويضمن وصول بضائعك إلى وجهتها النهائية بكفاءة."
        },
        seaShippingDetailFeature1: {
            en: "Full and Less than Container Load (FCL/LCL) shipping: Whether your shipment needs a Full Container Load or Less than Container Load, we provide the optimal option for your needs and budget.",
            ar: "شحن حمولات كاملة وجزئية (FCL/LCL): سواء كانت شحنتك بحاجة إلى حاوية كاملة (Full Container Load) أو جزء من حاوية (Less than Container Load)، نوفر لك الخيار الأمثل لاحتياجاتك وميزانيتك."
        },
        seaShippingDetailFeature2: {
            en: "Extensive network of global ports: We have strong relationships with major shipping companies worldwide, giving us the ability to access most major ports and provide effective international sea freight solutions.",
            ar: "شبكة واسعة من الموانئ العالمية: نتمتع بعلاقات قوية مع كبرى شركات الشحن البحري حول العالم، مما يمنحنا القدرة على الوصول إلى معظم الموانئ الرئيسية وتوفير حلول شحن بحري دولية فعالة."
        },
        seaShippingDetailFeature3: {
            en: "Competitive prices and flexible schedules: We offer economically viable prices to suit all budgets, in addition to flexible schedules that match your business needs and delivery expectations.",
            ar: "أسعار تنافسية وجداول زمنية مرنة: نقدم أسعارًا مجدية اقتصاديًا تناسب جميع الميزانيات، بالإضافة إلى جداول زمنية مرنة تتناسب مع احتياجات عملك وتوقعات التسليم."
        },
        seaShippingDetailFeature4: {
            en: "Multimodal transport solutions: We provide integrated transport solutions combining sea, land, or air freight, to ensure your shipments reach door-to-door with maximum efficiency and smoothness.",
            ar: "حلول نقل متعدد الوسائط (Multimodal): نوفر حلول نقل متكاملة تجمع بين الشحن البحري والبري أو الجوي، لضمان وصول شحناتك من الباب إلى الباب بأقصى كفاءة وسلاسة."
        },
        seaShippingDetailFeature5: {
            en: "Customs clearance services: Our specialized team handles all customs clearance procedures at origin and destination ports, ensuring quick release of your goods and avoiding any unnecessary delays.",
            ar: "خدمات التخليص الجمركي: يتولى فريقنا المتخصص جميع إجراءات التخليص الجمركي في موانئ الشحن والوصول، لضمان سرعة الإفراج عن بضائعك وتجنب أي تأخيرات غير ضرورية."
        },
        seaShippingRequestQuoteButton: { en: "Request a Quote", ar: "اطلب عرض سعر" },

        // Why Choose Sea Shipping Section
        whyChooseSeaShippingTitle: { en: "Why Choose Sea Shipping With Us?", ar: "لماذا تختار الشحن البحري معنا؟" },
        seaShippingFeatureCard1Title: { en: "1. Large Loads", ar: "1. حمولات كبيرة" },
        seaShippingFeatureCard1Text: {
            en: "Sea freight is the optimal choice for transporting huge quantities and large volumes of goods with high efficiency, making it the ideal solution for companies with large logistical needs.",
            ar: "الشحن البحري هو الخيار الأمثل لنقل الكميات الضخمة والأحجام الكبيرة من البضائع بكفاءة عالية، مما يجعله الحل الأمثل للشركات ذات الاحتياجات اللوجستية الكبيرة."
        },
        seaShippingFeatureCard2Title: { en: "2. Cost-Effectiveness", ar: "2. فعالية التكلفة" },
        seaShippingFeatureCard2Text: {
            en: "Sea freight is considered the most economical solution for long-distance international shipping, helping companies save logistical costs without compromising service quality or shipment safety.",
            ar: "يعتبر الشحن البحري الحل الأكثر اقتصادية للشحن الدولي لمسافات طويلة، مما يساعد الشركات على توفير التكاليف اللوجستية دون المساومة على جودة الخدمة أو أمان الشحنة."
        },
        seaShippingFeatureCard3Title: { en: "3. Global Coverage", ar: "3. تغطية عالمية" },
        seaShippingFeatureCard3Text: {
            en: "Thanks to our extensive network and relationships with global shipping companies, we can reach any major port in the world, opening new horizons for international trade for our clients.",
            ar: "بفضل شبكتنا الواسعة وعلاقاتنا مع شركات الشحن العالمية، يمكننا الوصول إلى أي ميناء رئيسي في العالم، مما يفتح لعملائنا آفاقًا جديدة للتجارة الدولية."
        },

        // Sea Shipping CTA Section
        seaShippingCtaTitle: { en: "Are you planning an international sea shipment or need integrated logistics solutions?", ar: "هل تخطط لشحنة بحرية دولية أو تحتاج إلى حلول لوجستية متكاملة؟" },
        seaShippingCtaSubtitle: {
            en: "We are here to make the process easy, efficient, and reliable. Contact us today for a free consultation and a customized quote.",
            ar: "نحن هنا لنجعل العملية سهلة وفعالة وموثوقة، تواصل معنا اليوم لتحصل على استشارة مجانية وعرض سعر مخصص."
        },
        seaShippingCtaButton: { en: "Talk to an Expert", ar: "تحدث مع خبير" },
        // Air Shipping Page Hero Section
        airShippingHeroTitle: { en: "Air Shipping", ar: "الشحن الجوي" },
        airShippingHeroSubtitle: {
            en: "Fast and efficient air freight solutions for your urgent goods, ensuring their arrival at their destination as quickly as possible with the highest levels of safety and quality, and extensive global coverage.",
            ar: "حلول شحن جوي سريعة وفعالة لبضائعك العاجلة، تضمن وصولها إلى وجهتها في أسرع وقت ممكن وبأعلى مستويات الأمان والجودة، مع تغطية عالمية واسعة."
        },
        airShippingExploreServicesButton: { en: "Explore Our Services", ar: "استكشف خدماتنا" },

        // Air Shipping Detail Content
        airShippingDetailTitle: { en: "Fast Air Shipping Services", ar: "خدمات الشحن الجوي السريع" },
        airShippingExplain1: {
            en: "When speed is the top priority, Dan Logistic Services provides reliable and highly efficient air freight solutions. We handle all types of air shipments, from small parcels to large cargo, ensuring their arrival as quickly as possible with the highest safety and security standards. We understand the importance of time in the business world, and therefore strive to provide unparalleled service that meets and exceeds your expectations.",
            ar: "عندما تكون السرعة هي الأولوية القصوى، توفر دعن للخدمات اللوجستية حلول شحن جوي موثوقة وعالية الكفاءة. نحن نتعامل مع جميع أنواع الشحنات الجوية، من الطرود الصغيرة إلى البضائع الكبيرة، مع ضمان وصولها في أسرع وقت ممكن وبأعلى معايير السلامة والأمان. ندرك أهمية الوقت في عالم الأعمال، ولذلك نسعى لتقديم خدمة لا مثيل لها تلبي توقعاتك وتتجاوزها."
        },
        airShippingExplain2: {
            en: "We work to simplify the air freight process for our clients by handling all logistical procedures and customs clearance, allowing you to focus on your core business while we take on the task of safely and quickly transporting your goods to their final destination around the world.",
            ar: "نحن نعمل على تبسيط عملية الشحن الجوي لعملائنا، من خلال التعامل مع جميع الإجراءات اللوجستية والتخليص الجمركي، مما يتيح لك التركيز على أعمالك الأساسية بينما نتولى نحن مهمة نقل بضائعك بأمان وسرعة إلى وجهتها النهائية حول العالم."
        },
        airShippingDetailFeature1: {
            en: "Fastest shipping methods for time-sensitive goods: We guarantee delivery of your shipments in record time, making us the ideal choice for urgent and essential materials that cannot tolerate delays.",
            ar: "أسرع طرق الشحن للبضائع الحساسة للوقت: نضمن توصيل شحناتك في أوقات قياسية، مما يجعلنا الخيار الأمثل للمواد العاجلة والضرورية التي لا تحتمل التأخير."
        },
        airShippingDetailFeature2: {
            en: "Real-time shipment tracking services: We provide advanced tracking systems that enable you to monitor your shipment's status and location with extreme accuracy, ensuring transparency and peace of mind.",
            ar: "خدمات تتبع الشحنات في الوقت الفعلي: نوفر لك أنظمة تتبع متقدمة تمكنك من مراقبة حالة شحنتك وموقعها بدقة متناهية، مما يضمن لك الشفافية وراحة البال."
        },
        airShippingDetailFeature3: {
            en: "Customized solutions for hazardous and valuable shipments: We have the necessary expertise and licenses to handle special nature shipments, including hazardous materials and high-value goods, applying the highest international safety standards.",
            ar: "حلول مخصصة للشحنات الخطرة والقيمة: لدينا الخبرة والتراخيص اللازمة للتعامل مع الشحنات ذات الطبيعة الخاصة، بما في ذلك المواد الخطرة والبضائع ذات القيمة العالية، مع تطبيق أعلى معايير السلامة الدولية."
        },
        airShippingDetailFeature4: {
            en: "Simplified and fast customs procedures: Our specialized team processes all customs procedures efficiently and quickly, ensuring your shipments pass smoothly across borders and avoiding any potential delays.",
            ar: "إجراءات جمركية مبسطة وسريعة: يقوم فريقنا المتخصص بمعالجة جميع الإجراءات الجمركية بكفاءة وسرعة، لضمان مرور شحناتك بسلاسة عبر الحدود وتجنب أي تأخيرات محتملة."
        },
        airShippingDetailFeature5: {
            en: "Specialized packing and packaging services: We offer packing and packaging solutions specifically designed for air freight, ensuring your goods are protected from damage during fast air transport.",
            ar: "خدمات التعبئة والتغليف المتخصصة: نقدم حلول تعبئة وتغليف مصممة خصيصًا للشحن الجوي، لضمان حماية بضائعك من التلف أثناء النقل الجوي السريع."
        },
        airShippingRequestQuoteButton: { en: "Request a Quote", ar: "اطلب عرض سعر" },

        // Advantages of Air Shipping Section
        airShippingAdvantagesTitle: { en: "Advantages of Air Shipping with Dan", ar: "مزايا الشحن الجوي مع دعن" },
        airShippingFeatureCard1Title: { en: "1. Ultra Speed", ar: "1. سرعة فائقة" },
        airShippingFeatureCard1Text: {
            en: "We are committed to providing extremely fast delivery for urgent and time-sensitive shipments, ensuring your goods reach their final destination in the shortest possible time.",
            ar: "نحن نلتزم بتقديم توصيل سريع للغاية للشحنات العاجلة والحساسة للوقت، مما يضمن وصول بضائعك إلى وجهتها النهائية في أقصر فترة زمنية ممكنة."
        },
        airShippingFeatureCard2Title: { en: "2. High Security", ar: "2. أمان عالي" },
        airShippingFeatureCard2Text: {
            en: "We apply stringent security measures and global safety protocols to protect your valuable and sensitive goods throughout all stages of the air journey, from reception to delivery.",
            ar: "نطبق إجراءات أمنية مشددة وبروتوكولات سلامة عالمية لحماية بضائعك الثمينة والحساسة خلال جميع مراحل الرحلة الجوية، من الاستلام وحتى التسليم."
        },
        airShippingFeatureCard3Title: { en: "3. Flexibility and Support", ar: "3. مرونة ودعم" },
        airShippingFeatureCard3Text: {
            en: "We offer flexible logistics solutions that adapt to your changing needs, in addition to round-the-clock customer support to answer your inquiries and provide assistance at any time.",
            ar: "نقدم حلولًا لوجستية مرنة تتكيف مع احتياجاتك المتغيرة، بالإضافة إلى دعم عملاء متاح على مدار الساعة للإجابة على استفساراتك وتقديم المساعدة في أي وقت."
        },

        // Air Shipping CTA Section
        airShippingCtaTitle: { en: "Do you have an urgent shipment that requires fast and reliable air freight?", ar: "هل لديك شحنة عاجلة تحتاج إلى شحن جوي سريع وموثوق؟" },
        airShippingCtaSubtitle: {
            en: "Contact us now to get the best air freight solutions specifically designed to meet your requirements and ensure the safe arrival of your goods.",
            ar: "تواصل معنا الآن للحصول على أفضل حلول الشحن الجوي المصممة خصيصًا لتلبية متطلباتك وضمان وصول بضائعك بأمان."
        },
        airShippingCtaButton: { en: "Get a Consultation", ar: "احصل على استشارة" },

        // Warehousing Page Hero Section
        warehousingHeroTitle: { en: "Warehousing", ar: "التخزين" },
        warehousingHeroSubtitle: {
            en: "Modern and secure storage facilities for all your logistics needs, with flexible solutions and advanced inventory management that ensure the safety of your goods and the efficiency of your supply chain operations.",
            ar: "مرافق تخزين حديثة وآمنة لجميع احتياجاتك اللوجستية، مع حلول مرنة وإدارة متقدمة للمخزون تضمن سلامة بضائعك وكفاءة عمليات سلسلة التوريد الخاصة بك."
        },
        warehousingExploreServicesButton: { en: "Explore Our Services", ar: "استكشف خدماتنا" },

        // Warehousing Detail Content
        warehousingDetailTitle: { en: "Integrated Warehousing Solutions", ar: "حلول التخزين المتكاملة" },
        warehousingExplain1: {
            en: "Dan Logistic Services provides modern, secure, and fully equipped storage facilities to handle a wide range of goods, from dry goods to temperature-controlled products. We understand that efficient warehousing is an essential part of a successful supply chain, and therefore, we provide integrated solutions that meet the highest standards of quality and safety.",
            ar: "توفر دعن للخدمات اللوجستية مرافق تخزين حديثة وآمنة ومجهزة بالكامل للتعامل مع مجموعة واسعة من البضائع، بدءًا من السلع الجافة وحتى المنتجات التي تتطلب درجات حرارة محكمة. نحن ندرك أن التخزين الفعال هو جزء أساسي من سلسلة التوريد الناجحة، ولذلك نوفر حلولًا متكاملة تلبي أعلى معايير الجودة والأمان."
        },
        warehousingExplain2: {
            en: "From long-term storage to inventory management, we offer flexible solutions to meet your supply chain requirements. Whether you need temporary storage space or integrated logistics solutions including distribution, our warehouses are equipped to provide the best possible service, reducing operational costs and increasing the efficiency of your supply chain.",
            ar: "من التخزين طويل الأجل إلى إدارة المخزون، نقدم حلولًا مرنة لتلبية متطلبات سلسلة التوريد الخاصة بك. سواء كنت بحاجة إلى مساحة تخزين مؤقتة أو حلول لوجستية متكاملة تشمل التوزيع، فإن مستودعاتنا مجهزة لتقديم أفضل خدمة ممكنة، مما يقلل التكاليف التشغيلية ويزيد من كفاءة سلسلة التوريد الخاصة بك."
        },
        warehousingDetailFeature1: {
            en: "Secure and 24/7 monitored warehouses: Our warehouses are equipped with the latest security monitoring systems and 24/7 surveillance cameras to ensure the protection of your goods from theft or damage.",
            ar: "مستودعات آمنة ومراقبة على مدار الساعة: مستودعاتنا مجهزة بأحدث أنظمة المراقبة الأمنية وكاميرات المراقبة على مدار 24 ساعة طوال أيام الأسبوع، لضمان حماية بضائعك من السرقة أو التلف."
        },
        warehousingDetailFeature2: {
            en: "Advanced inventory management systems (WMS): We use advanced Warehouse Management Systems (WMS) that provide accurate inventory tracking, real-time reports, and smooth management of goods flow in and out of the warehouse.",
            ar: "أنظمة إدارة مخزون متقدمة (WMS): نستخدم أنظمة متطورة لإدارة المستودعات (WMS) توفر تتبعًا دقيقًا للمخزون، تقارير فورية، وإدارة سلسة لتدفق البضائع داخل وخارج المستودع."
        },
        warehousingDetailFeature3: {
            en: "Refrigerated storage solutions (on request): We provide refrigerated and temperature-controlled storage areas, specifically designed for goods that require specific temperatures such as food products, pharmaceuticals, and sensitive chemicals.",
            ar: "حلول تخزين مبردة (عند الطلب): نوفر مناطق تخزين مبردة ومتحكم بها حراريًا، مصممة خصيصًا للبضائع التي تتطلب درجات حرارة معينة مثل المنتجات الغذائية والأدوية والكيماويات الحساسة."
        },
        warehousingDetailFeature4: {
            en: "Packing, packaging, and repacking services: We offer professional packing and packaging services, as well as repacking and labeling capabilities, to ensure your goods are ready for shipping or distribution upon request.",
            ar: "خدمات التعبئة والتغليف وإعادة التعبئة: نقدم خدمات تعبئة وتغليف احترافية، بالإضافة إلى إمكانية إعادة التعبئة والتسمية، لضمان أن بضائعك جاهزة للشحن أو التوزيع عند الطلب."
        },
        warehousingDetailFeature5: {
            en: "Efficient receiving, storage, and shipping operations: Our specialized team manages goods receiving, efficient storage, and accurate and timely fulfillment of shipping and distribution requests, ensuring smooth supply chain flow.",
            ar: "عمليات استلام، تخزين، وشحن فعالة: فريقنا المتخصص يدير عمليات استلام البضائع، وتخزينها بكفاءة، وتنفيذ طلبات الشحن والتوزيع بدقة وسرعة، لضمان تدفق سلسلة التوريد بسلاسة."
        },
        warehousingDetailFeature6: {
            en: "Customized storage solutions for all industries: Whether you are in retail, manufacturing, pharmaceuticals, or any other sector, we provide flexible storage solutions specifically designed to meet your unique business requirements.",
            ar: "حلول تخزين مخصصة لجميع الصناعات: سواء كنت في قطاع التجزئة، الصناعة، الأدوية، أو أي قطاع آخر، فإننا نقدم حلول تخزين مرنة ومصممة خصيصًا لتلبية متطلبات أعمالك الفريدة."
        },
        warehousingRequestQuoteButton: { en: "Request a Quote", ar: "اطلب عرض سعر" },

        // Why Choose Our Storage Services Section
        whyChooseWarehousingTitle: { en: "Why Choose Our Storage Services?", ar: "لماذا تختار خدمات التخزين لدينا؟" },
        warehousingFeatureCard1Title: { en: "1. Unparalleled Security", ar: "1. أمان لا مثيل له" },
        warehousingFeatureCard1Text: {
            en: "We prioritize the security of your goods. Our warehouses are equipped with the latest surveillance systems, access control, and a 24-hour security team to ensure the protection of your valuable assets.",
            ar: "نحن نولي الأولوية القصوى لأمان بضائعك. مستودعاتنا مجهزة بأحدث أنظمة المراقبة، التحكم في الدخول، وفريق أمني يعمل على مدار 24 ساعة لضمان حماية ممتلكاتك الثمينة."
        },
        warehousingFeatureCard2Title: { en: "2. Efficient Management", ar: "2. إدارة فعالة" },
        warehousingFeatureCard2Text: {
            en: "Using advanced Warehouse Management Systems (WMS), we provide you with complete control and clear real-time visibility of your inventory, enabling you to make informed decisions and improve the efficiency of your operations.",
            ar: "باستخدام أنظمة إدارة المخزون المتقدمة (WMS)، نوفر لك تحكمًا كاملًا ورؤية واضحة لمخزونك في الوقت الفعلي، مما يتيح لك اتخاذ قرارات مستنيرة وتحسين كفاءة عملياتك."
        },
        warehousingFeatureCard3Title: { en: "3. Flexible Solutions", ar: "3. حلول مرنة" },
        warehousingFeatureCard3Text: {
            en: "We offer storage options to suit all sizes and budgets, whether you need a small space for a few days or a large warehouse for long-term storage, with the ability to expand as your business grows.",
            ar: "نقدم خيارات تخزين تناسب جميع الأحجام والميزانيات، سواء كنت تحتاج إلى مساحة صغيرة لبضعة أيام أو مستودعًا كبيرًا لتخزين طويل الأمد، مع إمكانية التوسع حسب نمو أعمالك."
        },

        // Warehousing CTA Section
        warehousingCtaTitle: { en: "Are you looking for reliable and secure storage solutions that ensure the safety and efficiency of your goods?", ar: "هل تبحث عن حلول تخزين موثوقة وآمنة تضمن سلامة وكفاءة بضائعك؟" },
        warehousingCtaSubtitle: {
            en: "Contact us today to discuss your logistics needs and provide the right space for you, with our specialized team ready to provide support.",
            ar: "اتصل بنا اليوم لمناقشة احتياجاتك اللوجستية وتوفير المساحة المناسبة لك، مع فريقنا المتخصص الجاهز لتقديم الدعم."
        },
        warehousingCtaButton: { en: "Book Space Now", ar: "احجز مساحة الآن" }

    };

    let currentLanguage = localStorage.getItem("language") || "ar";

    function updateLanguage() {
        // بدّل النصوص
        for (const id in elementsToTranslate) {
            const el = select(`#${id}`);
            if (el) el.textContent = elementsToTranslate[id][currentLanguage];
        }

        // Update placeholder attributes for elements with data-i18n-placeholder
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (elementsToTranslate[key] && elementsToTranslate[key][currentLanguage]) {
                element.setAttribute('placeholder', elementsToTranslate[key][currentLanguage]);
            }
        });

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