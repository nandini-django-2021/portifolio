// ===== Navigation Menu =====
// Mobile menu toggle and smooth scroll navigation

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initSmoothScroll();
    initNavbarScroll();
});

// Initialize mobile menu toggle
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        // Animate menu toggle button
        const spans = menuToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(10px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
        }
    });

    // Close menu when clicking on a link
    navMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');

            // Reset menu toggle button
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
        });
    });

    console.log('[v0] Mobile menu initialized');
}

// Smooth scroll for navigation links
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            if (href === '#') return;

            const target = document.querySelector(href);

            if (!target) return;

            e.preventDefault();

            // Use Lenis if available, otherwise use native scroll
            if (typeof scrollToElement !== 'undefined') {
                scrollToElement(target);
            } else {
                target.scrollIntoView({
                    behavior: 'smooth',
                });
            }

            // Update active nav item
            updateActiveNavItem(href);
        });
    });

    console.log('[v0] Smooth scroll initialized');
}

// Update active navigation item based on scroll position
function initNavbarScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove('active');

            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    console.log('[v0] Navbar scroll tracking initialized');
}

// Update active nav item
function updateActiveNavItem(href) {
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach((link) => {
        link.classList.remove('active');

        if (link.getAttribute('href') === href) {
            link.classList.add('active');
        }
    });
}
