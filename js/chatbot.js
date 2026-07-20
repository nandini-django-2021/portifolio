// ===== AI Chatbot Widget =====
// Frontend for chatbot interaction with OpenAI backend

class AIAssistant {
    constructor() {
        this.chatbotToggle = document.getElementById('chatbotToggle');
        this.chatbotPanel = document.getElementById('chatbotPanel');
        this.closeChatbot = document.getElementById('closeChatbot');
        this.chatbotInput = document.getElementById('chatbotInput');
        this.sendBtn = document.getElementById('sendBtn');
        this.messagesContainer = document.getElementById('chatbotMessages');

        this.conversationHistory = [];
        this.isLoading = false;

        this.init();
    }

    init() {
        // Toggle chatbot panel
        if (this.chatbotToggle) {
            this.chatbotToggle.addEventListener('click', () => this.togglePanel());
        }

        // Close chatbot
        if (this.closeChatbot) {
            this.closeChatbot.addEventListener('click', () => this.togglePanel());
        }

        // Send message on button click
        if (this.sendBtn) {
            this.sendBtn.addEventListener('click', () => this.sendMessage());
        }

        // Send message on Enter key
        if (this.chatbotInput) {
            this.chatbotInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    this.sendMessage();
                }
            });
        }

        console.log('[v0] AI Assistant initialized');
    }

    togglePanel() {
        if (this.chatbotPanel) {
            this.chatbotPanel.classList.toggle('active');

            // Focus on input when opening
            if (this.chatbotPanel.classList.contains('active')) {
                setTimeout(() => {
                    if (this.chatbotInput) {
                        this.chatbotInput.focus();
                    }
                }, 100);
            }
        }
    }

    async sendMessage() {
        const message = this.chatbotInput.value.trim();

        if (!message || this.isLoading) return;

        // Reset input
        this.chatbotInput.value = '';

        // Add user message to UI
        this.addMessageToUI('user', message);

        // Disable input while loading
        this.isLoading = true;
        this.chatbotInput.disabled = true;
        this.sendBtn.disabled = true;

        try {
            // Add to conversation history
            this.conversationHistory.push({
                role: 'user',
                content: message,
            });

            // Send to backend
            const response = await fetch('/api/chatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: message,
                    conversationHistory: this.conversationHistory,
                }),
            });

            if (!response.ok) {
                throw new Error(`API error: ${response.status}`);
            }

            const data = await response.json();
            const botMessage = data.reply;

            // Add bot message to UI
            this.addMessageToUI('bot', botMessage);

            // Add to conversation history
            this.conversationHistory.push({
                role: 'assistant',
                content: botMessage,
            });

            console.log('[v0] Message sent successfully');
        } catch (error) {
            console.error('[v0] Error sending message:', error);
            this.addMessageToUI('bot', 'Sorry, I encountered an error. Please try again.');
        } finally {
            // Re-enable input
            this.isLoading = false;
            this.chatbotInput.disabled = false;
            this.sendBtn.disabled = false;
            this.chatbotInput.focus();
        }
    }

    addMessageToUI(role, content) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${role}-message`;

        const textP = document.createElement('p');
        textP.textContent = content;

        messageDiv.appendChild(textP);
        this.messagesContainer.appendChild(messageDiv);

        // Scroll to bottom
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;

        // Animate message with GSAP if available
        if (typeof gsap !== 'undefined') {
            gsap.fromTo(
                messageDiv,
                {
                    opacity: 0,
                    y: 10,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                }
            );
        }
    }

    addTypingIndicator() {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message bot-message loading';

        const textP = document.createElement('p');
        textP.textContent = 'Typing';

        messageDiv.appendChild(textP);
        this.messagesContainer.appendChild(messageDiv);

        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;

        return messageDiv;
    }

    removeTypingIndicator(element) {
        if (element && element.parentNode) {
            element.parentNode.removeChild(element);
        }
    }

    clearHistory() {
        this.conversationHistory = [];
        this.messagesContainer.innerHTML = `
            <div class="message bot-message">
                <p>Hello! How can I assist you today?</p>
            </div>
        `;
    }
}

// Export initialization function
function initChatbot() {
    window.aiAssistant = new AIAssistant();
}
