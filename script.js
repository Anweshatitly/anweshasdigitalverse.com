/* ================================================
   Anwesha's Digital Verse — Global Scripts
   ================================================ */

// Mobile menu toggle
function openMobileNav() {
  document.getElementById('mobileNav').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMobileNav() {
  document.getElementById('mobileNav').classList.remove('open');
  document.body.style.overflow = '';
}

// Nav scroll shadow
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.boxShadow = '0 4px 24px rgba(0,0,0,0.4)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// Scroll-reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.service-card, .feature-item, .value-card, .contact-card, .process-step, .reveal').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

// Formspree AJAX submission
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      const btn = form.querySelector('button[type=submit]');
      btn.textContent = '⏳ Sending...';
      btn.disabled = true;
      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          document.getElementById('formSuccess').style.display = 'block';
          form.reset();
          btn.textContent = '✅ Sent!';
        } else {
          btn.textContent = '🚀 Send Message';
          btn.disabled = false;
          alert('Something went wrong. Please call us at 8017586675');
        }
      } catch (err) {
        btn.textContent = '🚀 Send Message';
        btn.disabled = false;
        alert('Something went wrong. Please call us at 8017586675');
      }
    });
  }
});
