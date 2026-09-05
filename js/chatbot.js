// AI Chatbot widget
class ChatbotWidget {
    constructor() {
        this.toggle = document.getElementById('chatbot-toggle');
        this.widget = document.getElementById('chatbot-widget');
        this.close = document.getElementById('chatbot-close');
        this.messagesContainer = document.getElementById('chat-messages');
        this.input = document.getElementById('chat-input');
        this.sendBtn = document.getElementById('chat-send');
        this.isOpen = false;
        this.conversationHistory = [];

        this.init();
    }

    init() {
        this.toggle.addEventListener('click', () => this.toggleWidget());
        this.close.addEventListener('click', () => this.closeWidget());
        this.sendBtn.addEventListener('click', () => this.sendMessage());

        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });

        // Initial bot message
        this.addMessage(
            "Hello! I'm Nandini's AI Assistant. Ask me about her skills, experience, projects, or services!",
            'bot'
        );
    }

    toggleWidget() {
        if (this.isOpen) {
            this.closeWidget();
        } else {
            this.openWidget();
        }
    }

    openWidget() {
        this.widget.classList.add('active');
        this.isOpen = true;
        this.input.focus();
    }

    closeWidget() {
        this.widget.classList.remove('active');
        this.isOpen = false;
    }

    async sendMessage() {
        const message = this.input.value.trim();

        if (!message) return;

        // Add user message
        this.addMessage(message, 'user');
        this.input.value = '';

        // Show typing indicator
        this.addMessage('Typing...', 'bot', 'typing');

        try {
            const response = await this.getAIResponse(message);

            // Remove typing indicator
            const lastMessage = this.messagesContainer.lastChild;

            if (
                lastMessage &&
                lastMessage.classList.contains('typing')
            ) {
                lastMessage.remove();
            }

            // Add bot response
            this.addMessage(response, 'bot');

        } catch (error) {

            console.error('Chatbot error:', error);

            const lastMessage = this.messagesContainer.lastChild;

            if (
                lastMessage &&
                lastMessage.classList.contains('typing')
            ) {
                lastMessage.remove();
            }

            this.addMessage(
                'Sorry, something went wrong. Please try again.',
                'bot'
            );
        }
    }

    async getAIResponse(message) {

        const text = message.toLowerCase();

        // Greeting
        if (
            text.includes('hello') ||
            text.includes('hi') ||
            text.includes('hey') ||
            text.includes('good morning') ||
            text.includes('good evening')
        ) {
            return "Hello! 👋 I'm Nandini's AI Assistant. You can ask me about her WordPress experience, skills, projects, or services.";
        }

        // About
        if (
            text.includes('who are you') ||
            text.includes('about') ||
            text.includes('introduce')
        ) {
            return "Nandini is a WordPress Developer with 3+ years of experience building and customizing responsive websites, web applications, and dynamic WordPress solutions.";
        }

        // Experience
        if (
            text.includes('experience') ||
            text.includes('years')
        ) {
            return "Nandini has 3+ years of experience in WordPress development, working with custom websites, themes, plugins, WooCommerce, ACF, page builders, APIs, and web technologies.";
        }

        // WordPress
        if (
            text.includes('wordpress') ||
            text.includes('cms')
        ) {
            return "Nandini specializes in WordPress development, including custom themes, plugin customization, custom post types, ACF, WooCommerce, Elementor, Beaver Builder, REST APIs, and third-party integrations.";
        }

        // PHP
        if (text.includes('php')) {
            return "Yes. PHP is one of Nandini's core development skills. She has used PHP extensively for WordPress customization, custom functionality, themes, plugins, and backend development.";
        }

        // WooCommerce
        if (
            text.includes('woocommerce') ||
            text.includes('ecommerce') ||
            text.includes('e-commerce')
        ) {
            return "Nandini has experience working with WooCommerce, including product-related functionality, customization, layouts, and e-commerce website development.";
        }

        // ACF
        if (
            text.includes('acf') ||
            text.includes('advanced custom fields')
        ) {
            return "Nandini has hands-on experience with Advanced Custom Fields (ACF), using it to create dynamic content, custom fields, and flexible WordPress website structures.";
        }

        // Elementor
        if (text.includes('elementor')) {
            return "Nandini has strong experience with Elementor, including custom layouts, responsive designs, dynamic content, and advanced customization.";
        }

        // Beaver Builder
        if (
            text.includes('beaver builder') ||
            text.includes('beaver')
        ) {
            return "Yes, Nandini has experience working with Beaver Builder for creating and customizing responsive WordPress websites.";
        }

        // AppPresser
        if (text.includes('apppresser')) {
            return "Nandini has also worked with AppPresser for WordPress-based mobile application solutions.";
        }

        // JavaScript
        if (
            text.includes('javascript') ||
            text.includes('js') ||
            text.includes('jquery') ||
            text.includes('ajax')
        ) {
            return "Nandini works with JavaScript, jQuery, and AJAX for interactive functionality, dynamic content, animations, forms, and custom website features.";
        }

        // HTML / CSS
        if (
            text.includes('html') ||
            text.includes('css') ||
            text.includes('frontend') ||
            text.includes('front end')
        ) {
            return "Nandini has strong front-end development experience with HTML5, CSS3, JavaScript, responsive design, animations, and modern website interfaces.";
        }

        // Laravel
        if (text.includes('laravel')) {
            return "Nandini also has experience with Laravel and PHP-based web application development.";
        }

        // REST API
        if (
            text.includes('api') ||
            text.includes('rest')
        ) {
            return "Nandini has experience working with REST APIs, including API integration and developing API-based functionality for websites and applications.";
        }

        // MySQL / Database
        if (
            text.includes('mysql') ||
            text.includes('database') ||
            text.includes('sql')
        ) {
            return "Nandini has experience working with MySQL and SQL databases as part of WordPress and web application development.";
        }

        // Page builders
        if (
            text.includes('page builder') ||
            text.includes('divi') ||
            text.includes('wpbakery') ||
            text.includes('visual composer')
        ) {
            return "Nandini has worked with multiple WordPress page builders, including Elementor, Beaver Builder, Divi, WPBakery, and Visual Composer.";
        }

        // SEO
        if (
            text.includes('seo') ||
            text.includes('core web vitals') ||
            text.includes('performance')
        ) {
            return "Nandini has experience with technical SEO, website performance optimization, Core Web Vitals, and improving WordPress website performance.";
        }

        // Projects
        if (
            text.includes('project') ||
            text.includes('portfolio') ||
            text.includes('work')
        ) {
            return "You can explore the Projects section of this portfolio to see examples of Nandini's work and the technologies used in her projects.";
        }

        // Services
        if (
            text.includes('service') ||
            text.includes('what can you do') ||
            text.includes('what do you do')
        ) {
            return "Nandini can help with WordPress website development, customizations, WooCommerce, ACF, Elementor, custom functionality, API integrations, performance optimization, troubleshooting, and website maintenance.";
        }

        // Contact
        if (
            text.includes('contact') ||
            text.includes('hire') ||
            text.includes('available') ||
            text.includes('job') ||
            text.includes('opportunity')
        ) {
            return "Nandini is open to discussing new projects, job opportunities, and collaborations. You can use the Contact section to get in touch.";
        }

        // Skills
        if (
            text.includes('skill') ||
            text.includes('technology') ||
            text.includes('technologies') ||
            text.includes('tech stack')
        ) {
            return "Nandini's main skills include WordPress, PHP, Laravel, WooCommerce, ACF, Elementor, Beaver Builder, JavaScript, jQuery, AJAX, HTML, CSS, MySQL, REST APIs, technical SEO, and website optimization.";
        }

        // Default response
        return "I can tell you about Nandini's WordPress experience, PHP, WooCommerce, ACF, Elementor, Beaver Builder, AppPresser, JavaScript, REST APIs, projects, services, or how to contact her. What would you like to know?";
    }

    addMessage(text, sender, className = '') {

        const messageDiv = document.createElement('div');

        messageDiv.className =
            `chat-message ${sender} ${className}`;

        const contentDiv = document.createElement('div');

        contentDiv.className = 'message-content';

        contentDiv.textContent = text;

        messageDiv.appendChild(contentDiv);

        this.messagesContainer.appendChild(messageDiv);

        // Scroll to bottom
        this.messagesContainer.scrollTop =
            this.messagesContainer.scrollHeight;

        // Store conversation history
        if (className !== 'typing') {

            this.conversationHistory.push({
                role: sender === 'user'
                    ? 'user'
                    : 'assistant',
                content: text
            });
        }
    }
}


// Initialize chatbot
if (document.readyState === 'loading') {

    document.addEventListener('DOMContentLoaded', () => {
        new ChatbotWidget();
    });

} else {

    new ChatbotWidget();

}
