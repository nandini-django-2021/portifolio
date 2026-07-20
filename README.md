# Ghanta Nandini - Full Stack Developer Portfolio

A modern, elegant portfolio website for Ghanta Nandini - a Full Stack Developer specializing in WordPress, PHP, Django, and modern web technologies. Built with vanilla HTML/CSS/JavaScript featuring smooth animations and interactive components.

## Features

- **Professional Hero Section**: Animated intro with Ghanta Nandini's name and professional title
- **About Section**: Personal introduction and experience overview with animated stats
- **Skills Showcase**: 6 key technical skills (WordPress, PHP, Django, APIs, Mobile Dev, Performance)
- **Timeline**: Professional experience from internships to current role at Apptunix Technologies
- **Project Portfolio**: 4 featured projects showcasing real work (Apptunix, Dating App, APIs, Booking Systems)
- **Contact Form**: Direct messaging with form validation
- **AI Chatbot**: Interactive widget to answer visitor questions
- **Responsive Design**: Mobile-first design optimized for all devices
- **Smooth Animations**: GSAP ScrollTrigger for elegant scroll-based animations
- **Fast Loading**: Optimized for performance with 3D canvas animations

## Tech Stack

- **Frontend**: Vanilla HTML, CSS, JavaScript (No frameworks needed)
- **Animations**: GSAP 3 with ScrollTrigger for scroll-based effects
- **3D Graphics**: Three.js for animated canvas elements
- **Smooth Scroll**: Lenis library for buttery-smooth scrolling
- **Typography**: Typed.js for text animation effects
- **Chat**: Mock AI responses (can be upgraded to real OpenAI API)
- **Responsive**: Mobile-first CSS with media queries

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

## Contact

- **Email**: nandinighanta06@gmail.com
- **LinkedIn**: linkedin.com/in/ghanta-nandini
- **GitHub**: Check the portfolio for links
- **Location**: Eluru, Andhra Pradesh, India

## About Ghanta Nandini

Full Stack Developer with 2+ years of professional experience:
- **Current Role**: Full Stack Developer at Apptunix Technologies
- **Expertise**: WordPress, PHP, Django, REST APIs, Mobile App Development
- **Education**: B.Tech Computer Science, Lovely Professional University (2019-2023)
- **Certifications**: WordPress & PHP Developer, Full Stack Java Developer, Django Developer
- **Languages**: English, Hindi, Telugu (Native)
