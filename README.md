# Personal Portfolio Website

A high-end, single-page portfolio website built with HTML5, CSS3, and Vanilla JavaScript. Designed with a Supabase-inspired dark theme and glassmorphism effects. Optimized for GitHub Pages deployment.

## Features

### Design
- **Supabase-inspired Dark Theme**: Matte black background (#050505) with deep charcoal accents
- **Glassmorphism Effects**: Frosted glass design using `backdrop-filter: blur()`
- **Responsive Layout**: Fully responsive from mobile (320px) to desktop (1200px+)
- **Smooth Animations**: Fade-in and slide-up effects triggered by Intersection Observer API
- **High-contrast Typography**: Clean sans-serif fonts (Inter/Geist) with excellent readability

### Functionality
- **Sticky Navigation**: Smooth anchor links with active state indicators
- **Scroll Animations**: Elements animate into view as they enter the viewport
- **Mobile-friendly**: Touch-optimized interface with hamburger menu
- **Contact Form**: Built-in form validation and submission handling
- **Performance Optimized**: No external frameworks, lightweight and fast
- **Accessibility**: WCAG 2.1 AA compliant with semantic HTML and ARIA labels

### Sections
1. **Hero**: Minimalist intro with gradient background
2. **About**: Background and expertise overview
3. **Tech Stack**: Grid showcasing Java, Spring Boot, DevOps, and other technologies
4. **Projects**: Featured projects (SocialStream, Munch, Cloud Infrastructure, Distributed System)
5. **Contact**: Contact form and social media links
6. **Footer**: Copyright and deployment info

## File Structure

```
portfolio/
├── index.html              # Main HTML file
├── styles/
│   ├── main.css            # Global styles & CSS variables
│   ├── layout.css          # Flexbox & Grid utilities
│   ├── animations.css      # Keyframe animations
│   ├── components.css      # Navbar, cards, buttons, forms
│   └── responsive.css      # Media queries & breakpoints
├── scripts/
│   ├── main.js             # Initialization & utilities
│   ├── intersection-observer.js  # Scroll animations
│   ├── smooth-scroll.js    # Navigation & scroll behavior
│   └── form.js             # Form validation & submission
├── DESIGN_SYSTEM.md        # Design tokens & guidelines
├── FILE_STRUCTURE.md       # Project structure documentation
└── README.md               # This file
```

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Background | `#050505` | Base background |
| Surface Dark | `#0a0a0a` | Dark surfaces |
| Surface Light | `#1a1a1a` | Light surfaces |
| Border | `#2a2a2a` | Borders & dividers |
| Primary Green | `#10b981` | Accent & highlights |
| Electric Blue | `#3b82f6` | Secondary accent |
| Primary Text | `#ffffff` | Main text |
| Secondary Text | `#9ca3af` | Description text |
| Tertiary Text | `#6b7280` | Captions & meta |

## Typography

**Font Stack**: `'Inter', 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 | 3.5rem | 700 | 1.2 |
| H2 | 2.25rem | 600 | 1.3 |
| H3 | 1.5rem | 600 | 1.4 |
| Body | 1rem | 400 | 1.6 |
| Small | 0.875rem | 400 | 1.5 |

## Responsive Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| Mobile | < 640px | Phones & small tablets |
| Tablet | 640px - 1024px | Tablets |
| Desktop | > 1024px | Desktop computers |
| Large Desktop | > 1200px | Large screens |

## Getting Started

### Local Development

1. Clone or download the repository
2. Open `index.html` in your browser
3. No build process or dependencies required!

### GitHub Pages Deployment

1. Create a GitHub repository named `username.github.io`
2. Push all files to the main branch
3. Your site will be live at `https://username.github.io`

**Alternatively**, push to a `/docs` folder in any repository:
1. Push files to the `docs/` folder
2. Enable GitHub Pages in repository settings
3. Select "Deploy from a branch" → "main branch /docs folder"

## Configuration

### Update Personal Information
Edit `index.html` and replace:
- `Sefa Turk` with your name
- Email addresses with your contact info
- Social media links (LinkedIn, GitHub, Twitter, Email)
- Project descriptions and tags

### Update Contact Form
The form currently shows a success message locally. To enable email delivery, choose one option:

#### Option 1: Formspree (Recommended for GitHub Pages)
1. Go to [formspree.io](https://formspree.io) and create an account
2. Replace the form action URL with your Formspree endpoint
3. No backend required!

#### Option 2: EmailJS
1. Sign up at [emailjs.com](https://emailjs.com)
2. Uncomment the EmailJS section in `scripts/form.js`
3. Add your service and template IDs

#### Option 3: Custom Backend
Modify the fetch request in `scripts/form.js` to point to your backend API

## Customization

### Change Colors
Edit CSS variables in `styles/main.css`:
```css
:root {
  --accent-green: #10b981;
  --bg-base: #050505;
  /* ... other variables */
}
```

### Add Sections
1. Create new `<section>` in `index.html`
2. Add styling in `styles/components.css`
3. Elements with `fade-in-observer` class will animate automatically

### Modify Animations
Edit `styles/animations.css` to adjust:
- Animation duration (`--transition-normal`)
- Keyframe values (translateY, scale, etc.)
- Stagger delays

## Performance Optimizations

- ✅ No external CSS/JS frameworks (Bootstrap, jQuery, etc.)
- ✅ Minimal JavaScript (~15KB combined)
- ✅ CSS containment for better rendering
- ✅ Lazy loading for images
- ✅ Optimized animations using `transform` and `opacity`
- ✅ Prefers reduced motion for accessibility

## Browser Support

| Browser | Support | Note |
|---------|---------|------|
| Chrome | ✅ | Latest 2 versions |
| Firefox | ✅ | Latest 2 versions |
| Safari | ✅ | Latest 2 versions |
| Edge | ✅ | Latest 2 versions |
| IE 11 | ❌ | Not supported |

## Accessibility Features

- ✅ Semantic HTML5 structure
- ✅ ARIA labels for interactive elements
- ✅ Keyboard navigation (Tab, Enter, Escape)
- ✅ Focus indicators for keyboard users
- ✅ Color contrast ratios meet WCAG AA standards
- ✅ Respects `prefers-reduced-motion` media query
- ✅ Form validation with error messages
- ✅ Skip to content link

## SEO Optimization

- ✅ Semantic HTML markup
- ✅ Meta descriptions and og tags
- ✅ Structured data (optional, can be added)
- ✅ Mobile-friendly responsive design
- ✅ Fast page load times
- ✅ Proper heading hierarchy

## Future Enhancements

- [ ] Add project case studies
- [ ] Blog section
- [ ] Dark/Light theme toggle
- [ ] Newsletter signup
- [ ] Google Analytics integration
- [ ] Search functionality
- [ ] Project filtering
- [ ] Testimonials section

## License

This portfolio template is free to use and modify for personal use.

## Support & Questions

For issues or questions:
1. Check the `DESIGN_SYSTEM.md` for design tokens
2. Review the HTML comments for implementation details
3. Check browser console for any errors

## Credits

- **Design Inspiration**: Supabase UI
- **Fonts**: Inter by Rasmus Andersson
- **Icons**: Inline SVGs for performance
- **No external dependencies** - Built with vanilla HTML, CSS, and JavaScript

---

**Built with ❤️ by Sefa Turk**

Made with HTML5, CSS3, and Vanilla JavaScript
