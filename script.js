// Tokki Chew — tiny client-side enhancements
// (Keep this file small. If it starts growing, that's the signal to adopt a framework.)

// ---------- Scroll reveal ----------
// Fades elements in as they enter the viewport. Uses IntersectionObserver
// (supported in all modern browsers). Elements opt in by receiving the
// `.reveal` class at load time.
const revealTargets = document.querySelectorAll(
  '.feature, .testimonial, .section-title, .section-eyebrow, .cta-band h2, .cta-band p, .cta-band .button'
);

revealTargets.forEach((el) => el.classList.add('reveal'));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

revealTargets.forEach((el) => io.observe(el));

// ---------- Nav shadow on scroll ----------
const nav = document.querySelector('.nav');
const onScroll = () => {
  if (window.scrollY > 10) {
    nav.style.boxShadow = '0 10px 30px -20px rgba(168, 106, 90, 0.25)';
  } else {
    nav.style.boxShadow = 'none';
  }
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
