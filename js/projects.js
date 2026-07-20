// Project modal handling
class ProjectModal {
    constructor() {
        this.modal = document.getElementById('project-modal');
        this.projectCards = document.querySelectorAll('.project-card');
        this.projectData = {
            1: {
                title: 'Healthcare Platform',
                description: 'A comprehensive health management system with real-time data visualization, patient monitoring, and integrated health analytics for better healthcare outcomes.',
                image: 'images/project-1.png',
                tags: ['Design', 'Development', 'Healthcare']
            },
            2: {
                title: 'E-commerce Platform',
                description: 'Modern shopping experience with AI-driven product recommendations, seamless checkout process, and advanced inventory management.',
                image: 'images/project-2.png',
                tags: ['Design', 'Development', 'E-commerce']
            },
            3: {
                title: 'Social Network',
                description: 'Next-generation social platform featuring innovative community features, real-time messaging, and powerful content discovery algorithms.',
                image: 'images/project-3.png',
                tags: ['Design', 'Development', 'Social']
            },
            4: {
                title: 'Analytics Dashboard',
                description: 'Powerful analytics platform for real-time data visualization, comprehensive reporting, and data-driven decision making.',
                image: 'images/project-4.png',
                tags: ['Design', 'Development', 'Analytics']
            }
        };
        this.init();
    }
    
    init() {
        this.projectCards.forEach(card => {
            const viewBtn = card.querySelector('.view-btn');
            if (viewBtn) {
                viewBtn.addEventListener('click', () => {
                    const projectId = card.getAttribute('data-project');
                    this.openModal(projectId);
                });
            }
        });
        
        // Close modal
        const closeBtn = this.modal.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeModal());
        }
        
        // Close modal on background click
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });
    }
    
    openModal(projectId) {
        const project = this.projectData[projectId];
        if (!project) return;
        
        document.getElementById('modal-project-image').src = project.image;
        document.getElementById('modal-project-title').textContent = project.title;
        document.getElementById('modal-project-description').textContent = project.description;
        
        const tagsContainer = document.getElementById('modal-project-tags');
        tagsContainer.innerHTML = project.tags.map(tag => `<span>${tag}</span>`).join('');
        
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    closeModal() {
        this.modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Initialize projects
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new ProjectModal();
    });
} else {
    new ProjectModal();
}
