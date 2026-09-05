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

    async handleSubmit() {
        const name = this.form.querySelector('input[name="name"]').value.trim();
        const email = this.form.querySelector('input[name="email"]').value.trim();
        const message = this.form.querySelector('textarea[name="message"]').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert('Please enter a valid email');
            return;
        }

        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        const formData = new FormData(this.form);

        try {
            const response = await fetch(
                'https://api.web3forms.com/submit',
                {
                    method: 'POST',
                    body: formData
                }
            );

            const result = await response.json();

            if (response.ok && result.success) {

                submitBtn.textContent = 'Message Sent!';
                this.form.reset();

                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 3000);

            } else {
                alert('Failed to send message. Please try again.');

                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }

        } catch (error) {
            console.error('Error:', error);

            alert('Unable to send message. Please try again.');

            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }
}

// Initialize form
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new ContactForm();
    });
} else {
    new ContactForm();
}
