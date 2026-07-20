// ===== Scroll Trigger Animations =====
// GSAP ScrollTrigger animations for portfolio, services, and contact sections

document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.warn('[v0] GSAP or ScrollTrigger not loaded');
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Portfolio items animation
    animatePortfolioItems();
    
    // Services cards animation
    animateServiceCards();
    
    // Contact form animation
    animateContactForm();
    
    // Section titles animation
    animateSectionTitles();
    
    // Scroll progress indicator
    createScrollProgress();
});

// Animate portfolio items on scroll
function animatePortfolioItems() {
    const items = gsap.utils.toArray('.portfolio-item');

    items.forEach((item, index) => {
        gsap.fromTo(
            item,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: index * 0.1,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: false,
                    markers: false,
                },
                ease: 'power2.out',
            }
        );

        // Hover effect with GSAP
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                y: -10,
                duration: 0.3,
                overwrite: 'auto',
            });
        });

        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                y: 0,
                duration: 0.3,
                overwrite: 'auto',
            });
        });
    });
}

// Animate service cards on scroll
function animateServiceCards() {
    const cards = gsap.utils.toArray('.service-card');

    cards.forEach((card, index) => {
        gsap.fromTo(
            card,
            {
                opacity: 0,
                y: 40,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: index * 0.15,
                scrollTrigger: {
                    trigger: '.services-grid',
                    start: 'top 75%',
                    end: 'top 25%',
                    scrub: false,
                    markers: false,
                },
                ease: 'back.out(1.5)',
            }
        );

        // Border animation on scroll
        gsap.to(card, {
            borderColor: 'var(--color-gold)',
            boxShadow: '0 10px 30px rgba(184, 134, 11, 0.1)',
            duration: 0.6,
            scrollTrigger: {
                trigger: card,
                start: 'top 70%',
                end: 'top 50%',
                scrub: 1,
                markers: false,
            },
            ease: 'power2.out',
        });
    });
}

// Animate contact form on scroll
function animateContactForm() {
    const form = document.querySelector('.contact-form');

    if (form) {
        gsap.fromTo(
            form,
            {
                opacity: 0,
                y: 60,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: '.contact',
                    start: 'top 70%',
                    end: 'top 20%',
                    scrub: false,
                    markers: false,
                },
                ease: 'power2.out',
            }
        );

        // Animate form inputs
        const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
        inputs.forEach((input, index) => {
            gsap.fromTo(
                input,
                {
                    opacity: 0,
                    x: -30,
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.6,
                    delay: index * 0.1,
                    scrollTrigger: {
                        trigger: form,
                        start: 'top 60%',
                        end: 'top 20%',
                        scrub: false,
                        markers: false,
                    },
                    ease: 'power2.out',
                }
            );
        });
    }
}

// Animate section titles
function animateSectionTitles() {
    const titles = document.querySelectorAll('.section-title');

    titles.forEach((title) => {
        // Split text into characters
        const text = title.innerText;
        title.innerHTML = '';

        text.split('').forEach((char) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.display = 'inline-block';
            title.appendChild(span);
        });

        const chars = title.querySelectorAll('span');

        gsap.fromTo(
            chars,
            {
                opacity: 0,
                y: 30,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.05,
                scrollTrigger: {
                    trigger: title,
                    start: 'top 80%',
                    end: 'top 50%',
                    scrub: false,
                    markers: false,
                },
                ease: 'back.out(1.5)',
            }
        );
    });
}

// Create scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    gsap.to(progressBar, {
        width: '100%',
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.5,
            markers: false,
        },
    });

    console.log('[v0] Scroll progress indicator created');
}

// Refresh ScrollTrigger on window resize
window.addEventListener('resize', () => {
    if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.getAll().forEach((trigger) => trigger.refresh());
    }
});

console.log('[v0] Scroll animations initialized');
