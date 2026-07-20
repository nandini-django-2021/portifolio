// ===== Lenis Smooth Scroll Setup =====
// Initialize Lenis for smooth scrolling throughout the page

if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smoothWheel: true,
        smoothTouch: false,
        touchMultiplier: 2,
    });

    // Integration with GSAP
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);
    }

    // Scroll to function
    window.scrollToElement = (element) => {
        lenis.scrollTo(element);
    };
} else {
    console.warn('[v0] Lenis library not loaded');
}
