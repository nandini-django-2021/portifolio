// GSAP scroll animations
class ScrollAnimations {
    constructor() {
        this.init();
    }
    
    init() {
        if (typeof gsap === 'undefined' || !gsap.registerPlugin) return;
        
        gsap.registerPlugin(ScrollTrigger);
        
        // Animate section headers
        gsap.utils.toArray('.section-header').forEach(element => {
            gsap.from(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    markers: false
                },
                opacity: 0,
                y: 30,
                duration: 0.8
            });
        });
        
        // Animate skill cards
        gsap.utils.toArray('.skill-card').forEach((card, index) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%'
                },
                opacity: 0,
                y: 20,
                duration: 0.6,
                delay: index * 0.1
            });
        });
        
        // Animate project cards
        gsap.utils.toArray('.project-card').forEach((card, index) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%'
                },
                opacity: 0,
                y: 20,
                duration: 0.6,
                delay: index * 0.1
            });
        });
        
        // Animate timeline items
        gsap.utils.toArray('.timeline-item').forEach((item, index) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%'
                },
                opacity: 0,
                x: index % 2 === 0 ? -30 : 30,
                duration: 0.6
            });
        });
        
        // Animate about stats
        gsap.utils.toArray('.stat-number').forEach(stat => {
            gsap.from(stat, {
                scrollTrigger: {
                    trigger: stat,
                    start: 'top 85%'
                },
                textContent: 0,
                duration: 2,
                snap: { textContent: 1 }
            });
        });
    }
}

// Initialize scroll animations
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new ScrollAnimations();
    });
} else {
    new ScrollAnimations();
}
