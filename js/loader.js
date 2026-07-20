// Loading screen with progress animation
class LoadingScreen {
    constructor() {
        this.loadingScreen = document.getElementById('loading-screen');
        this.loadingPercent = document.querySelector('.loading-percent');
        this.loadingFill = document.querySelector('.loading-fill');
        this.progress = 0;
        this.init();
    }
    
    init() {
        // Simulate loading progress
        const interval = setInterval(() => {
            this.progress += Math.random() * 30;
            if (this.progress > 90) this.progress = 90;
            
            this.updateProgress();
        }, 200);
        
        // When page is fully loaded, complete progress
        window.addEventListener('load', () => {
            clearInterval(interval);
            this.progress = 100;
            this.updateProgress();
            
            // Fade out loading screen
            setTimeout(() => {
                this.loadingScreen.style.opacity = '0';
                this.loadingScreen.style.pointerEvents = 'none';
            }, 500);
        });
    }
    
    updateProgress() {
        this.loadingPercent.textContent = Math.floor(this.progress) + '%';
        this.loadingFill.style.width = this.progress + '%';
    }
}

// Initialize loading screen
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new LoadingScreen();
    });
} else {
    new LoadingScreen();
}
