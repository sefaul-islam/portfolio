# Portfolio Website - File Structure

```
Portfolio/
├── index.html              # Main HTML file with all sections
├── styles/
│   ├── main.css            # Global styles, CSS variables, typography
│   ├── layout.css          # Layout, grid, flexbox utilities
│   ├── components.css      # Navbar, cards, buttons, forms
│   ├── animations.css      # Keyframe animations, transitions
│   └── responsive.css      # Media queries for mobile/tablet/desktop
├── scripts/
│   ├── main.js             # Entry point, initialization
│   ├── intersection-observer.js  # Fade-and-slide animations
│   ├── smooth-scroll.js    # Smooth anchor link scrolling
│   └── form.js             # Contact form handling
├── assets/
│   ├── images/             # Project images, tech icons
│   └── icons/              # SVG icons for social links
├── DESIGN_SYSTEM.md        # Design tokens and guidelines
├── README.md               # Project documentation
└── .gitignore              # Git ignore rules
```

## Key Features Implementation Plan

### 1. HTML Structure
- Semantic HTML5 with proper landmark elements (nav, main, section, footer)
- Accessibility-first approach (ARIA labels, semantic headings)
- Mobile-first responsive design
- No external dependencies

### 2. CSS Architecture
- CSS Custom Properties (variables) for theming
- Modular CSS files for maintainability
- Glassmorphism cards with backdrop-filter
- Responsive grid layouts with CSS Grid and Flexbox
- Smooth transitions and hover effects

### 3. JavaScript Functionality
- Intersection Observer API for scroll animations
- Smooth scrolling for navigation links
- Form validation and submission handling
- No external libraries (vanilla JS only)

### 4. Performance Optimizations
- Lazy loading for images (native HTML attribute)
- CSS containment for performance
- Minimal JavaScript bundle
- Optimized for GitHub Pages deployment

### 5. Accessibility
- WCAG 2.1 AA compliance
- Semantic HTML structure
- Color contrast ratios meet standards
- Keyboard navigation support
- Focus indicators

### 6. Deployment
- Single index.html file for GitHub Pages
- No build process required
- All assets self-contained
- Lightweight and fast loading
