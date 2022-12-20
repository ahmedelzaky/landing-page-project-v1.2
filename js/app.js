/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const sections = Array.from(document.querySelectorAll("section"));
const main = document.querySelector(".main");
const navList = document.querySelector("#navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

function buildNav() {
  for (section of sections) {
    let secId = section.getAttribute("id");
    let secData = section.getAttribute("data-nav");
    let Li = document.createElement("li");
    Li.innerHTML = `<a class="menu__link" data-id=${secId} data-nav="${secData}" href="#${secId}">${secData}</a>`;
    navList.appendChild(Li);
  }
}

// Add class 'active' to section when near top of viewport

const observer = new IntersectionObserver(
  (eles) => {
    eles.forEach((ele) => {
      ele.target.classList.toggle("active", ele.isIntersecting);
      const data = ele.target.dataset.nav;
      const anchor = navList.querySelector(`[data-nav=${CSS.escape(data)}]`);
      anchor.classList.toggle("active", ele.isIntersecting);
    });
  },
  {
    threshold: 0.8,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});

// Scroll to anchor ID using scrollTO event
// Scroll to section on link click

navList.addEventListener("click", (event) => {
  event.preventDefault();
  link = event.target.dataset.id;
  let ele = document.querySelector(`#${link}`);
  ele.scrollIntoView({ behavior: "smooth" });
});
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

buildNav();

// Scroll to section on link click

// Set sections as active
