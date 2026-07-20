// ===== Testimonials Carousel =====
// Navigation and auto-rotation for testimonials carousel

class TestimonialsCarousel {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.testimonial-slide');
        this.indicators = document.querySelectorAll('.indicator');
        this.autoRotateInterval = null;

        this.init();
    }

    init() {
        // Event listeners for navigation buttons
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        if (prevBtn) prevBtn.addEventListener('click', () => this.prevSlide());
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextSlide());

        // Event listeners for indicator dots
        this.indicators.forEach((indicator) => {
            indicator.addEventListener('click', (e) => {
                const slideIndex = parseInt(e.target.dataset.slide);
                this.goToSlide(slideIndex);
            });
        });

        // Auto-rotate carousel
        this.startAutoRotate();

        // Stop auto-rotate on hover
        const carousel = document.querySelector('.testimonials-carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', () => this.stopAutoRotate());
            carousel.addEventListener('mouseleave', () => this.startAutoRotate());
        }

        console.log('[v0] Testimonials carousel initialized');
    }

    showSlide(index) {
        // Ensure index is within bounds
        if (index >= this.slides.length) {
            this.currentSlide = 0;
        } else if (index < 0) {
            this.currentSlide = this.slides.length - 1;
        } else {
            this.currentSlide = index;
        }

        // Remove active class from all slides and indicators
        this.slides.forEach((slide) => slide.classList.remove('active'));
        this.indicators.forEach((indicator) => indicator.classList.remove('active'));

        // Add active class to current slide and indicator
        this.slides[this.currentSlide].classList.add('active');
        this.indicators[this.currentSlide].classList.add('active');

        // Animate slide with GSAP if available
        if (typeof gsap !== 'undefined') {
            gsap.fromTo(
                this.slides[this.currentSlide],
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 0.5,
                }
            );
        }
    }

    nextSlide() {
        this.showSlide(this.currentSlide + 1);
    }

    prevSlide() {
        this.showSlide(this.currentSlide - 1);
    }

    goToSlide(index) {
        this.showSlide(index);
    }

    startAutoRotate() {
        this.autoRotateInterval = setInterval(() => {
            this.nextSlide();
        }, 5000); // Rotate every 5 seconds
    }

    stopAutoRotate() {
        clearInterval(this.autoRotateInterval);
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TestimonialsCarousel();
});
