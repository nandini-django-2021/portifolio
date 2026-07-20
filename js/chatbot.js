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
        
        // Add initial bot message
        this.addMessage('Hello! I\'m Ghanta\'s AI Assistant. Ask me about her work, skills, or services!', 'bot');
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
        this.addMessage('...', 'bot', 'typing');
        
        try {
            // Simulate AI response (replace with real API call)
            const response = await this.getAIResponse(message);
            
            // Remove typing indicator
            const lastMessage = this.messagesContainer.lastChild;
            if (lastMessage && lastMessage.classList.contains('typing')) {
                lastMessage.remove();
            }
            
            // Add bot response
            this.addMessage(response, 'bot');
        } catch (error) {
            console.error('Error getting response:', error);
            this.addMessage('Sorry, I encountered an error. Please try again.', 'bot');
        }
    }
    
    async getAIResponse(message) {
        // Mock responses for demo (replace with real OpenAI API call)
        const responses = [
            'That\'s a great question! I specialize in UI/UX design and web development.',
            'I\'d be happy to help! My expertise includes product design, interactive design, and brand strategy.',
            'I have over 5 years of experience working on amazing digital projects.',
            'Feel free to check out my portfolio section to see my recent work!',
            'I\'m always open to discussing new opportunities and collaborations.',
            'My design approach combines strategic thinking with creative problem-solving.',
            'Would you like to know more about any specific project?',
            'I specialize in creating digital experiences that inspire and engage users.'
        ];
        
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    addMessage(text, sender, className = '') {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender} ${className}`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.textContent = text;
        
        messageDiv.appendChild(contentDiv);
        this.messagesContainer.appendChild(messageDiv);
        
        // Scroll to bottom
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
        
        // Store in history
        if (className !== 'typing') {
            this.conversationHistory.push({ role: sender === 'user' ? 'user' : 'assistant', content: text });
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
