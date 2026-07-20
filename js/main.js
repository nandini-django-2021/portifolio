// Main initialization file
document.addEventListener('DOMContentLoaded', () => {
    console.log('[v0] Premium portfolio initialized');
    
    // Hide loading screen
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            loadingScreen.style.pointerEvents = 'none';
        }, 2000);
    }
    
    // Initialize smooth scrolling with Lenis if available
    initSmoothScroll();
});

// Smooth scrolling setup
function initSmoothScroll() {
    if (typeof Lenis !== 'undefined') {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });
        
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        
        requestAnimationFrame(raf);
    }
}

// Add scroll animations for stats
document.addEventListener('DOMContentLoaded', () => {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        if (target && typeof gsap !== 'undefined') {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        gsap.to(stat, {
                            textContent: target,
                            duration: 2,
                            snap: { textContent: 1 },
                            ease: 'power1.out'
                        });
                        observer.unobserve(stat);
                    }
                });
            });
            observer.observe(stat);
        }
    });
});

// Handle CTA button clicks
document.addEventListener('DOMContentLoaded', () => {
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const text = this.textContent;
            if (text.includes('View My Work')) {
                document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
            } else if (text.includes('Get In Touch')) {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Mobile menu responsive behavior
window.addEventListener('resize', () => {
    const navMenu = document.getElementById('nav-menu');
    if (window.innerWidth > 768 && navMenu) {
        navMenu.classList.remove('active');
    }
});
