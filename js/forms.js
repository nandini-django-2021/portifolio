// Contact form handling
class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.init();
    }
    
    init() {
        if (!this.form) return;
        
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }
    
    handleSubmit() {
        const name = this.form.querySelector('input[type="text"]').value;
        const email = this.form.querySelector('input[type="email"]').value;
        const message = this.form.querySelector('textarea').value;
        
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email');
            return;
        }
        
        // Show success message
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Message Sent!';
        submitBtn.disabled = true;
        
        // Reset form
        this.form.reset();
        
        // Restore button after delay
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 3000);
        
        console.log('[v0] Contact form submitted:', { name, email, message });
    }
}

// Initialize forms
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new ContactForm();
    });
} else {
    new ContactForm();
}
