/**
 * CONTACT FORM VALIDATION & SUBMISSION
 * Handles form validation and submission with email integration
 */

const contactForm = document.getElementById('contactForm');

// Form field validation rules
const validationRules = {
  name: {
    required: true,
    minLength: 2,
    pattern: /^[a-zA-Z\s'-]+$/,
    message: 'Please enter a valid name (2+ characters, letters only)'
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address'
  },
  subject: {
    required: true,
    minLength: 3,
    message: 'Subject must be at least 3 characters'
  },
  message: {
    required: true,
    minLength: 10,
    message: 'Message must be at least 10 characters'
  }
};

/**
 * Validate a single field
 */
function validateField(fieldName, value) {
  const rules = validationRules[fieldName];

  if (!rules) return true;

  // Check required
  if (rules.required && !value.trim()) {
    return false;
  }

  // Check minimum length
  if (rules.minLength && value.length < rules.minLength) {
    return false;
  }

  // Check pattern (regex)
  if (rules.pattern && !rules.pattern.test(value)) {
    return false;
  }

  return true;
}

/**
 * Show field error
 */
function showFieldError(fieldName, errorMessage) {
  const field = document.getElementById(fieldName);
  const formGroup = field.closest('.form-group');
  const errorElement = formGroup.querySelector('.form-error');

  formGroup.classList.add('error');
  errorElement.textContent = errorMessage;
}

/**
 * Clear field error
 */
function clearFieldError(fieldName) {
  const field = document.getElementById(fieldName);
  const formGroup = field.closest('.form-group');
  const errorElement = formGroup.querySelector('.form-error');

  formGroup.classList.remove('error');
  errorElement.textContent = '';
}

/**
 * Validate entire form
 */
function validateForm() {
  let isValid = true;

  Object.keys(validationRules).forEach((fieldName) => {
    const field = document.getElementById(fieldName);
    const value = field.value;
    const rules = validationRules[fieldName];

    if (!validateField(fieldName, value)) {
      showFieldError(fieldName, rules.message);
      isValid = false;
    } else {
      clearFieldError(fieldName);
    }
  });

  return isValid;
}

/**
 * Real-time field validation on input
 */
document.querySelectorAll('.form-input, .form-textarea').forEach((field) => {
  field.addEventListener('blur', () => {
    const fieldName = field.name;
    const value = field.value;
    const rules = validationRules[fieldName];

    if (rules && !validateField(fieldName, value)) {
      showFieldError(fieldName, rules.message);
    } else {
      clearFieldError(fieldName);
    }
  });

  // Clear error on input
  field.addEventListener('input', () => {
    const fieldName = field.name;
    clearFieldError(fieldName);
  });
});

/**
 * Handle form submission
 */
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Validate form
  if (!validateForm()) {
    console.log('Form validation failed');
    return;
  }

  // Get form data
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
  };

  // Show loading state
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;

  try {
    /**
     * FORMSPREE INTEGRATION
     * Sends form data to sefaulislam.1234@gmail.com via Formspree
     * First visit https://formspree.io to activate this form endpoint
     */
    // IMPORTANT: Replace 'xyzqwert' with your actual Formspree Form ID
    // Setup: Go to https://formspree.io, create form with sefaulislam.1234@gmail.com
    // See EMAIL_SETUP.md for complete instructions
    const response = await fetch('https://formspree.io/f/xyzqwert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      })
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    // Success message
    showSuccessMessage();
    contactForm.reset();

  } catch (error) {
    console.error('Form submission error:', error);
    showErrorMessage('Failed to send message. Please try again.');
  } finally {
    // Restore button state
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
});

/**
 * Show success message
 */
function showSuccessMessage() {
  const successMsg = document.createElement('div');
  successMsg.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: rgba(16, 185, 129, 0.1);
    border: 1px solid rgb(16, 185, 129);
    color: rgb(16, 185, 129);
    padding: 16px 24px;
    border-radius: 8px;
    font-weight: 500;
    z-index: 2000;
    animation: slideDown 0.3s ease-out;
  `;
  successMsg.textContent = '✓ Message sent successfully!';

  document.body.appendChild(successMsg);

  // Remove after 4 seconds
  setTimeout(() => {
    successMsg.style.animation = 'slideUp 0.3s ease-out forwards';
    setTimeout(() => successMsg.remove(), 300);
  }, 4000);
}

/**
 * Show error message
 */
function showErrorMessage(message) {
  const errorMsg = document.createElement('div');
  errorMsg.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: rgba(239, 68, 68, 0.1);
    border: 1px solid rgb(239, 68, 68);
    color: rgb(239, 68, 68);
    padding: 16px 24px;
    border-radius: 8px;
    font-weight: 500;
    z-index: 2000;
    animation: slideDown 0.3s ease-out;
  `;
  errorMsg.textContent = `✗ ${message}`;

  document.body.appendChild(errorMsg);

  // Remove after 5 seconds
  setTimeout(() => {
    errorMsg.style.animation = 'slideUp 0.3s ease-out forwards';
    setTimeout(() => errorMsg.remove(), 300);
  }, 5000);
}

/**
 * Add notification animations
 */
const style = document.createElement('style');
style.textContent = `
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideUp {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-20px);
    }
  }
`;
document.head.appendChild(style);
