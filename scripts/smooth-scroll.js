/**
 * SMOOTH SCROLL & NAVIGATION
 * Handles smooth anchor link scrolling and navbar active state
 */

// Get all navigation links
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navbarLinks = document.getElementById('navbarLinks');

/**
 * Update active navigation link based on scroll position
 */
function updateActiveNavLink() {
  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

/**
 * Smooth scroll to target on link click
 */
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      // Close mobile menu if open
      navbarLinks.classList.remove('active');

      // Smooth scroll to target
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Update active link
      updateActiveNavLink();
    }
  });
});

/**
 * Mobile menu toggle
 */
mobileMenuBtn.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

/**
 * Close mobile menu when clicking outside
 */
document.addEventListener('click', (e) => {
  if (!e.target.closest('.navbar')) {
    navbarLinks.classList.remove('active');
  }
});

/**
 * Update active link on scroll
 */
window.addEventListener('scroll', () => {
  updateActiveNavLink();

  // Add shadow to navbar on scroll
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

/**
 * Initialize active link on page load
 */
document.addEventListener('DOMContentLoaded', () => {
  updateActiveNavLink();
});

/**
 * BACK TO TOP BUTTON
 */
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
