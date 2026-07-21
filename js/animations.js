// Simple fade-in animations on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in class to elements
    const elements = document.querySelectorAll('.skill-card, .project-card, .timeline-item');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.animation = `fadeIn 0.6s ease-out ${index * 0.1}s forwards`;
    });
});

// Animation definition
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);
