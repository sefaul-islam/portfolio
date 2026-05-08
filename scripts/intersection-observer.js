/**
 * INTERSECTION OBSERVER API
 * Triggers fade-and-slide animations when elements enter the viewport
 */

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add the in-view class to trigger animation
      entry.target.classList.add('in-view');
    }
  });
}, observerOptions);

// Initialize observer on page load
document.addEventListener('DOMContentLoaded', () => {
  // Observe all elements with fade-in-observer class
  const fadeElements = document.querySelectorAll('.fade-in-observer');
  fadeElements.forEach((element) => {
    observer.observe(element);
  });

  // Observe all staggered items
  const staggerItems = document.querySelectorAll('.stagger-item');
  staggerItems.forEach((item) => {
    observer.observe(item);
  });
});

/**
 * OPTIONAL: Observe images for lazy loading animation
 */
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    }
  });
}, {
  threshold: 0.01
});

// Observe lazy-loaded images
document.addEventListener('DOMContentLoaded', () => {
  const lazyImages = document.querySelectorAll('img[data-src]');
  lazyImages.forEach((img) => {
    imageObserver.observe(img);
  });
});
