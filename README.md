# Belal's Digital Marketing Portfolio

A modern, professional single-page portfolio website built with Vue 3 and Tailwind CSS for a digital marketing specialist.

## Features

- **Vue 3 with Composition API**: Clean, modern Vue.js implementation
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Theme**: Custom dark color scheme with accent colors
- **Smooth Animations**: Scroll reveal effects, hover transitions, and floating elements
- **Professional Layout**: Clean component structure with reusable styles

## Tech Stack

- Vue 3 (Composition API)
- TypeScript
- Tailwind CSS
- Vite (build tool)
- Inter Font (Google Fonts)

## Project Structure

```
src/
├── components/
│   ├── Navbar.vue
│   ├── HeroSection.vue
│   ├── AboutSection.vue
│   ├── ExperienceSection.vue
│   ├── ProjectsSection.vue
│   ├── CVSection.vue
│   ├── ContactSection.vue
│   └── Footer.vue
├── composables/
│   └── useScrollReveal.ts
├── assets/
├── App.vue
├── main.ts
└── style.css
```

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:5173 in your browser

## Build for Production

```bash
npm run build
```

## Customization

### Colors
The color scheme is defined in `tailwind.config.js` and `src/style.css`:
- Primary Background: #0B1120
- Secondary Background: #111827
- Accent: #6366F1
- Accent 2: #EC4899
- Text Heading: #FFFFFF
- Text Paragraph: #9CA3AF

### Content
Update the placeholder content in each component:
- Personal information in HeroSection.vue
- Experience details in ExperienceSection.vue
- Project descriptions in ProjectsSection.vue
- Contact information in ContactSection.vue

### Images
Replace placeholder image paths with actual images:
- `/placeholder-avatar.jpg` in HeroSection.vue
- `/project1.jpg`, `/project2.jpg`, etc. in ProjectsSection.vue

## Components Overview

- **Navbar**: Sticky navigation with mobile menu
- **HeroSection**: Introduction with animated elements
- **AboutSection**: Personal bio and statistics
- **ExperienceSection**: Timeline layout for experience and education
- **ProjectsSection**: Grid layout showcasing projects
- **CVSection**: Download CV call-to-action
- **ContactSection**: Contact form and social links
- **Footer**: Simple copyright footer

## Animations

- Scroll reveal animations using Intersection Observer
- Hover effects on interactive elements
- Floating animation on hero avatar
- Gradient backgrounds and glow effects

## Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## License

This project is open source and available under the MIT License.
