/* ============================================
   CÍNTIA MENDES ADVOCACIA - Landing Page JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initFAQ();
    initScrollAnimations();
    initSmoothScroll();
});

/* ── Navbar scroll effect ── */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    function updateNavbar() {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
            navbar.classList.remove('transparent');
        } else {
            navbar.classList.remove('scrolled');
            navbar.classList.add('transparent');
        }
    }

    updateNavbar();
    window.addEventListener('scroll', updateNavbar, { passive: true });
}

/* ── Mobile Menu ── */
function initMobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    if (!toggle || !navLinks) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

/* ── FAQ Accordion ── */
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const inner = item.querySelector('.faq-answer-inner');

        if (!question || !answer || !inner) return;

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                const otherAnswer = otherItem.querySelector('.faq-answer');
                if (otherAnswer) otherAnswer.style.maxHeight = '0';
            });

            // Open clicked (if was closed)
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = inner.scrollHeight + 'px';
            }
        });
    });
}

/* ── Scroll Animations (IntersectionObserver) ── */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .stagger-children');

    if (!animatedElements.length) return;

    // Check prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
        animatedElements.forEach(el => el.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));
}

/* ── Smooth Scroll for anchor links ── */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (!targetId || targetId === '#') return;

            const target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();
            const navbarHeight = 80;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
}
