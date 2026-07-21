// Text animations for better visual appeal
class TextAnimations {
    constructor() {
        this.init();
    }
    
    init() {
        this.animateHeading();
        this.animateStats();
        this.animateElements();
    }
    
    animateHeading() {
        const heading = document.querySelector('.hero-title');
        if (!heading) return;
        
        const text = heading.textContent;
        heading.textContent = '';
        heading.style.display = 'inline-block';
        
        let index = 0;
        const interval = setInterval(() => {
            if (index <= text.length) {
                heading.textContent = text.substring(0, index);
                index++;
            } else {
                clearInterval(interval);
            }
        }, 50);
    }
    
    animateStats() {
        const stats = document.querySelectorAll('.stat-number');
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            let current = 0;
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !stat.animated) {
                        stat.animated = true;
                        const increment = target / 50;
                        
                        const counter = setInterval(() => {
                            current += increment;
                            if (current >= target) {
                                stat.textContent = target;
                                clearInterval(counter);
                            } else {
                                stat.textContent = Math.floor(current);
                            }
                        }, 30);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(stat);
        });
    }
    
    animateElements() {
        // Stagger animations for cards
        const cards = document.querySelectorAll('.skill-card, .project-card');
        cards.forEach((card, index) => {
            card.style.animationDelay = (index * 0.1) + 's';
        });
        
        // Timeline items
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            item.style.animationDelay = (index * 0.15) + 's';
        });
    }
}

// Initialize on document ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new TextAnimations();
    });
} else {
    new TextAnimations();
}
