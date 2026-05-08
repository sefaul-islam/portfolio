/**
 * MAIN JAVASCRIPT FILE
 * Initialization and global functionality
 */

/**
 * DOM Ready Handler
 */
document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfolio website initialized');

  // Initialize all modules
  initializePerformance();
  initializeAccessibility();
  initializeAnimations();
});

/**
 * PERFORMANCE OPTIMIZATION
 */
function initializePerformance() {
  // Preload critical fonts
  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = 'https://fonts.googleapis.com';
  document.head.appendChild(link);

  // Enable image lazy loading
  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    img.loading = 'lazy';
  });

  // Report Web Vitals (optional)
  if ('web-vital' in window) {
    // Track performance metrics
    console.log('Performance monitoring enabled');
  }
}

/**
 * ACCESSIBILITY ENHANCEMENTS
 */
function initializeAccessibility() {
  // Skip to content link
  const skipLink = document.createElement('a');
  skipLink.href = '#main';
  skipLink.className = 'sr-only';
  skipLink.textContent = 'Skip to main content';
  document.body.insertBefore(skipLink, document.body.firstChild);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    // Press '/' to focus search (future enhancement)
    if (e.key === '/' && !['input', 'textarea'].includes(document.activeElement.tagName.toLowerCase())) {
      e.preventDefault();
      // Focus search if available
    }

    // Press 'Escape' to close mobile menu
    if (e.key === 'Escape') {
      const navbarLinks = document.getElementById('navbarLinks');
      navbarLinks.classList.remove('active');
    }
  });

  // Add ARIA labels where needed
  const buttons = document.querySelectorAll('button');
  buttons.forEach((btn) => {
    if (!btn.getAttribute('aria-label')) {
      btn.setAttribute('aria-label', btn.textContent.trim());
    }
  });
}

/**
 * ANIMATION INITIALIZATION
 */
function initializeAnimations() {
  // Add animation to hero elements on page load
  const heroElements = document.querySelectorAll('.hero .animate-fade-slide-up');
  
  heroElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 150}ms`;
  });

  // Add scroll animations
  animateOnScroll();
}

/**
 * SCROLL-TRIGGERED ANIMATIONS
 */
function animateOnScroll() {
  const options = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, options);

  // Observe all animation triggers
  document.querySelectorAll('[class*="animate-"]').forEach((el) => {
    observer.observe(el);
  });
}

/**
 * UTILITY: Get theme preference
 */
function getThemePreference() {
  const preference = localStorage.getItem('theme-preference');

  if (preference) {
    return preference;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * UTILITY: Set theme
 */
function setTheme(theme) {
  localStorage.setItem('theme-preference', theme);
  document.documentElement.setAttribute('data-theme', theme);
}

/**
 * UTILITY: Debounce function
 */
function debounce(func, wait) {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * UTILITY: Throttle function
 */
function throttle(func, limit) {
  let inThrottle;

  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * UTILITY: Check if element is in viewport
 */
function isInViewport(element) {
  const rect = element.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * NETWORK STATUS INDICATOR
 */
window.addEventListener('online', () => {
  console.log('Back online');
  // Show notification or restore functionality
});

window.addEventListener('offline', () => {
  console.log('Offline');
  // Disable form submission or show offline notice
});

/**
 * PAGE VISIBILITY DETECTION
 */
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    console.log('Page is hidden');
    // Pause animations, stop auto-play videos, etc.
  } else {
    console.log('Page is visible');
    // Resume animations, restart auto-play videos, etc.
  }
});

/**
 * PERFORMANCE MONITORING
 */
if ('PerformanceObserver' in window) {
  // Monitor Core Web Vitals
  try {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log('Performance metric:', entry.name, entry.value);
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
  } catch (e) {
    // Performance Observer not supported
  }
}

/**
 * DEBUG MODE (remove in production)
 */
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  window.DEBUG = true;
  console.log('%cDEBUG MODE ENABLED', 'color: yellow; font-weight: bold;');
}

/**
 * EXPORT UTILITIES FOR CONSOLE ACCESS
 */
window.portolioUtils = {
  getThemePreference,
  setTheme,
  debounce,
  throttle,
  isInViewport
};
