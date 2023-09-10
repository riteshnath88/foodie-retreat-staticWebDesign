// Dynamically updating the copyright year

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Opening the navigation bar for mobile applications

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

/////////////////////////STICKY NAVIGATION////////////
// Not displaying the sticky navigation in the hero section but only after the next section.
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.querySelector(".header").classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.querySelector(".header").classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
  }
);
obs.observe(sectionHeroEl);
