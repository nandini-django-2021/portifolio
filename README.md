# Premium Portfolio Website

A sophisticated, light-themed portfolio website built with vanilla HTML/CSS/JavaScript featuring smooth animations, interactive components, and an AI-powered chatbot.

## Features

- **Hero Section**: 3D animated text effects with Typed.js and Three.js
- **Smooth Scrolling**: Lenis-powered smooth scroll experience throughout the site
- **Scroll Animations**: GSAP ScrollTrigger animations on portfolio items, services, and testimonials
- **Portfolio Grid**: Showcase projects with hover effects and filtering
- **Services Section**: Display services with icons and descriptions
- **Testimonials**: Interactive carousel with client testimonials
- **Contact Form**: Fully functional contact form with validation
- **AI Chatbot**: OpenAI GPT-powered chatbot widget for visitor engagement
- **Responsive Design**: Mobile-first design with full responsiveness
- **Hamburger Menu**: Mobile navigation with smooth animations

## Tech Stack

- **Vanilla HTML/CSS/JavaScript** - No framework overhead
- **GSAP 3** - Advanced animations and scroll effects
- **Three.js** - 3D graphics for hero section
- **Lenis** - Smooth scrolling library
- **Typed.js** - Text typing animation
- **OpenAI API** - AI chatbot integration

## Installation & Setup

### 1. Install Dependencies

This project uses CDN-based libraries for most dependencies. The only npm dependency needed is for the OpenAI API backend:

```bash
npm install openai
```

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```
OPENAI_API_KEY=your_openai_api_key_here
```

Get your OpenAI API key from: https://platform.openai.com/api-keys

### 3. Modify Content

Edit the `index.html` file to customize:
- Your name and tagline in the hero section
- Portfolio projects and descriptions
- Services offered
- Testimonials
- Contact information
- Social media links

### 4. Run the Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## Project Structure

```
├── index.html              # Main HTML file with all sections
├── css/
│   ├── styles.css         # Main stylesheet and layout
│   └── animations.css     # Animation keyframes and effects
├── js/
│   ├── app.js             # Main initialization file
│   ├── lenis-setup.js     # Smooth scrolling setup
│   ├── hero-animations.js # Hero 3D animations with Three.js
│   ├── scroll-animations.js # GSAP scroll-triggered animations
│   ├── carousel.js        # Testimonials carousel
│   ├── navigation.js      # Mobile menu functionality
│   └── chatbot.js         # AI chatbot widget
├── api/
│   └── chatbot.js         # OpenAI API endpoint (Vercel Function)
└── public/                # Static assets
```

## Customization

### Colors & Theme

Edit the CSS custom properties in `css/styles.css`:
- `:root` section defines primary colors
- Modify for your brand

### Animations

- **Scroll animations**: Adjust timing in `scroll-animations.js`
- **Hero animations**: Modify speed/effects in `hero-animations.js`
- **Smooth scroll**: Configure Lenis in `lenis-setup.js`

### Chatbot System Prompt

Modify the system prompt in `api/chatbot.js` to customize chatbot personality and knowledge.

## Deployment

### Deploy to Vercel

```bash
vercel deploy
```

Make sure to add your `OPENAI_API_KEY` environment variable in Vercel project settings.

### Deploy to Other Platforms

For platforms like Netlify:
1. Use their serverless function support for the chatbot endpoint
2. Add `OPENAI_API_KEY` to environment variables
3. Update API endpoint in `js/chatbot.js` if needed

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- Lazy-loaded images with native `loading="lazy"`
- Debounced scroll events
- Optimized Three.js rendering
- CSS transforms for smooth animations
- Minimal JavaScript bundle size

## License

MIT License - Feel free to use this template for your portfolio

## Support

For issues or questions:
1. Check the console for error messages (F12)
2. Ensure all environment variables are set
3. Verify OpenAI API key is valid
4. Check browser compatibility
