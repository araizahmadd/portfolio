function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Fade in sections on scroll
window.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const revealSection = () => {
    const triggerBottom = window.innerHeight * 0.92;
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', revealSection);
  revealSection();
});
