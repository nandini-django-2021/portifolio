// Hero section with typing effect and Three.js canvas
class HeroAnimation {
    constructor() {
        this.typedTextElement = document.querySelector('.typed-text');
        this.canvas = document.getElementById('canvas-hero');
        this.init();
    }
    
    init() {
        this.initTypedEffect();
        this.initCanvasAnimation();
    }
    
    initTypedEffect() {
        if (this.typedTextElement && typeof Typed !== 'undefined') {
            new Typed(this.typedTextElement, {
                strings: [
                    'Ghanta Nandini',
                    'a Product Designer',
                    'a Creative Developer',
                    'an Innovator'
                ],
                typeSpeed: 80,
                backSpeed: 60,
                backDelay: 2000,
                loop: true,
                showCursor: true,
                cursorChar: '|'
            });
        }
    }
    
    initCanvasAnimation() {
        if (!this.canvas || typeof THREE === 'undefined') return;
        
        const width = this.canvas.clientWidth;
        const height = this.canvas.clientHeight;
        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: this.canvas, alpha: true });
        
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0x050816, 0);
        camera.position.z = 5;
        
        // Create animated geometry
        const geometry = new THREE.IcosahedronGeometry(2, 4);
        const material = new THREE.MeshPhongMaterial({
            color: 0x00F5FF,
            emissive: 0x7B61FF,
            wireframe: false,
            shininess: 100
        });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        
        // Add lights
        const light = new THREE.PointLight(0x00F5FF, 1, 100);
        light.position.set(5, 5, 5);
        scene.add(light);
        
        const light2 = new THREE.PointLight(0xFF4D9E, 0.5, 100);
        light2.position.set(-5, -5, 5);
        scene.add(light2);
        
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
        scene.add(ambientLight);
        
        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            
            mesh.rotation.x += 0.005;
            mesh.rotation.y += 0.008;
            mesh.rotation.z += 0.003;
            
            renderer.render(scene, camera);
        };
        animate();
        
        // Handle window resize
        window.addEventListener('resize', () => {
            const newWidth = this.canvas.clientWidth;
            const newHeight = this.canvas.clientHeight;
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(newWidth, newHeight);
        });
    }
}

// Initialize hero animations when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new HeroAnimation();
    });
} else {
    new HeroAnimation();
}
