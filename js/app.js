// Initialize all components on page load
document.addEventListener('DOMContentLoaded', function() {
  console.log('[v0] Initializing portfolio application');
  
  // Initialize Lenis smooth scrolling
  initLenisScrolling();
  
  // Initialize hero animations
  initHeroAnimations();
  
  // Initialize scroll-triggered animations
  initScrollAnimations();
  
  // Initialize navigation menu
  initNavigation();
  
  // Initialize testimonials carousel
  initCarousel();
  
  // Initialize contact form
  initContactForm();
  
  // Initialize chatbot
  initChatbot();
  
  console.log('[v0] Portfolio application initialized');
});

// Contact Form Handler
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(form);
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;
    
    // Show success message (in production, this would send to an API)
    console.log('[v0] Form submission:', { name, email, message });
    
    // Reset form
    form.reset();
    
    // Show temporary success message
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Message Sent!';
    submitBtn.disabled = true;
    
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 3000);
  });
  
  console.log('[v0] Contact form initialized');
}

// Cleanup on page unload
window.addEventListener('beforeunload', function() {
  // Cleanup Three.js renderer if it exists
  if (window.threeScene && window.threeScene.renderer) {
    window.threeScene.renderer.dispose();
  }
  
  // Cleanup GSAP animations
  gsap.globalTimeline.clear();
});
