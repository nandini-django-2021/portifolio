// Navigation menu handling
class Navigation {
    constructor() {
        this.navToggle = document.getElementById('nav-toggle');
        this.navMenu = document.getElementById('nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }
    
    init() {
        // Toggle menu on mobile
        if (this.navToggle) {
            this.navToggle.addEventListener('click', () => {
                this.navMenu.classList.toggle('active');
                this.animateToggle();
            });
        }
        
        // Close menu when link is clicked
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.navMenu.classList.remove('active');
            });
        });
    }
    
    animateToggle() {
        const spans = this.navToggle.querySelectorAll('span');
        if (this.navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(10px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
        }
    }
}

// Initialize navigation
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new Navigation();
    });
} else {
    new Navigation();
}
