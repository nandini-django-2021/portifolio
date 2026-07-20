// Custom cursor implementation
class CustomCursor {
    constructor() {
        this.cursor = document.getElementById('cursor');
        this.cursorFollower = document.getElementById('cursor-follower');
        this.mouseX = 0;
        this.mouseY = 0;
        this.followerX = 0;
        this.followerY = 0;
        this.speed = 0.15;
        
        this.init();
    }
    
    init() {
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
            
            // Update main cursor immediately
            this.cursor.style.left = this.mouseX + 'px';
            this.cursor.style.top = this.mouseY + 'px';
        });
        
        // Animation loop for follower
        this.animate();
    }
    
    animate() {
        this.followerX += (this.mouseX - this.followerX) * this.speed;
        this.followerY += (this.mouseY - this.followerY) * this.speed;
        
        this.cursorFollower.style.left = this.followerX - 16 + 'px';
        this.cursorFollower.style.top = this.followerY - 16 + 'px';
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new CustomCursor();
    });
} else {
    new CustomCursor();
}
