// Particle system for background effects
class ParticleSystem {
    constructor() {
        this.particles = [];
        this.particleCount = 50;
        this.init();
    }
    
    init() {
        // Create particle canvas
        const canvas = document.createElement('canvas');
        canvas.id = 'particle-canvas';
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '0';
        
        document.body.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Create particles
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
        
        // Animation loop
        const animate = () => {
            ctx.fillStyle = 'rgba(5, 8, 22, 0)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            this.particles.forEach(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                // Wrap around edges
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;
                
                // Draw particle with gradient
                const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size);
                gradient.addColorStop(0, `rgba(0, 245, 255, ${particle.opacity})`);
                gradient.addColorStop(1, `rgba(0, 245, 255, 0)`);
                
                ctx.fillStyle = gradient;
                ctx.fillRect(particle.x - particle.size, particle.y - particle.size, particle.size * 2, particle.size * 2);
            });
            
            requestAnimationFrame(animate);
        };
        
        animate();
        
        // Handle window resize
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }
}

// Initialize particle system
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new ParticleSystem();
    });
} else {
    new ParticleSystem();
}
