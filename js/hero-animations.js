// ===== Hero Section Animations =====
// GSAP animations and Typed.js for hero text

document.addEventListener('DOMContentLoaded', () => {
    initHeroAnimations();
    initTypedText();
    initHero3D();
});

// Initialize typed text effect
function initTypedText() {
    const typingElement = document.getElementById('typingText');
    
    if (typingElement && typeof Typed !== 'undefined') {
        // Clear initial text
        typingElement.textContent = '';

        const typed = new Typed('#typingText', {
            strings: [
                'I\'m a Premium Designer',
                'I craft beautiful experiences',
                'I build interactive solutions',
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            loopCount: Infinity,
            startDelay: 500,
        });
    }
}

// Initialize hero GSAP animations
function initHeroAnimations() {
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const buttons = document.querySelectorAll('.hero-buttons .btn');
    const greeting = document.querySelector('.hero-greeting');
    const subtitle = document.querySelector('.hero-subtitle');

    // Timeline for hero entrance animation
    const heroTimeline = gsap.timeline();

    // Animate greeting
    heroTimeline.from(greeting, {
        opacity: 0,
        y: 20,
        duration: 0.6,
    }, 0);

    // Animate title
    heroTimeline.from('.hero-title', {
        opacity: 0,
        y: 30,
        duration: 0.8,
    }, 0.2);

    // Animate subtitle
    heroTimeline.from(subtitle, {
        opacity: 0,
        y: 20,
        duration: 0.6,
    }, 0.4);

    // Animate buttons
    heroTimeline.from(buttons, {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 0.6,
    }, 0.6);

    // Scroll-triggered animations for content
    if (typeof ScrollTrigger !== 'undefined') {
        // Parallax effect for hero visual
        gsap.to('.hero-visual', {
            scrollTrigger: {
                trigger: '.hero',
                start: 'top center',
                end: 'bottom center',
                scrub: 1,
            },
            y: -100,
            opacity: 0.8,
        });

        // Scale effect on hero content
        gsap.to('.hero-content', {
            scrollTrigger: {
                trigger: '.hero',
                start: 'top center',
                end: 'center center',
                scrub: 1,
            },
            y: 50,
            opacity: 0.7,
        });
    }
}

// Initialize Three.js 3D animation for hero visual
function initHero3D() {
    const container = document.getElementById('hero3DContainer');
    
    if (!container || typeof THREE === 'undefined') {
        console.warn('[v0] Three.js not loaded or container not found');
        return;
    }

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0xf0f0f0, 0.5);
    container.appendChild(renderer.domElement);

    // Create geometry and material
    const geometry = new THREE.IcosahedronGeometry(2, 4);
    const material = new THREE.MeshPhongMaterial({
        color: 0xb8860b,
        emissive: 0x554400,
        shininess: 100,
        wireframe: false,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Lighting
    const light1 = new THREE.DirectionalLight(0xffffff, 1);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xffffff, 0.5);
    light2.position.set(-5, -5, 5);
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    camera.position.z = 5;

    // Mouse tracking
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);

        // Rotate mesh
        mesh.rotation.x += 0.002;
        mesh.rotation.y += 0.003;

        // Follow mouse
        mesh.rotation.x += (mouseY * 0.5 - mesh.rotation.x) * 0.05;
        mesh.rotation.y += (mouseX * 0.5 - mesh.rotation.y) * 0.05;

        renderer.render(scene, camera);
    }

    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    });

    console.log('[v0] Three.js 3D animation initialized');
}
