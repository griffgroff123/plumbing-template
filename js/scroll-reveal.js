// Reveals .reveal elements as they scroll into view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Parallax on scroll
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const parallaxSections = document.querySelectorAll(
    ".services-preview, .cta-strip, .services-page, .about-page, .contact-page, .why-page"
  );

  function applyParallax() {
    const vh = window.innerHeight;
    parallaxSections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const centerOffset = rect.top + rect.height / 2 - vh / 2;
      section.style.transform = `translateY(${centerOffset * 0.08}px)`;
    });
  }

  window.addEventListener("scroll", applyParallax, { passive: true });
  applyParallax();
}
