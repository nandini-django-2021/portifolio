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
        const name = this.form.querySelector('input[type="text"]').value.trim();
        const email = this.form.querySelector('input[type="email"]').value.trim();
        const message = this.form.querySelector('textarea').value.trim();

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

        const formData = new FormData();

        // IMPORTANT - add your real Web3Forms access key
       formData.append("access_key", "b967f3e9-45fa-4ae8-984a-9806fd1c9ab5");

        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);

        // Optional subject
        formData.append('subject', 'New Message From Portfolio');

        try {
            const response = await fetch(
                'https://api.web3forms.com/submit',
                {
                    method: 'POST',
                    body: formData
                }
            );

            const data = await response.json();

            console.log('Web3Forms Response:', data);

            if (data.success) {
                submitBtn.textContent = 'Message Sent!';

                alert('Success! Your message has been sent.');

                this.form.reset();

                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 3000);

            } else {
                alert('Error: ' + data.message);

                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }

        } catch (error) {
            console.error('Web3Forms Error:', error);

            alert('Something went wrong. Please try again.');

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
