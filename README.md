# landing-page

# Demo-Preview

<<<<<<< HEAD
=======

https://user-images.githubusercontent.com/89663624/208741019-8b3c020d-07d4-450d-97ec-1f2ac74c9252.mp4


# Installation
>>>>>>> 87ea1aadcc81c19513a7ecb71bf407c9f2a2d198

# Development

#### 1 - build the nav

```javascript
function buildNav() {
  for (section of sections) {
    let secId = section.getAttribute("id");
    let secData = section.getAttribute("data-nav");
    let Li = document.createElement("li");
    Li.innerHTML = `<a class="menu__link" data-id=${secId} data-nav="${secData}" href="#${secId}">${secData}</a>`;
    navList.appendChild(Li);

```

### 2 - Add class 'active' to section when near top of viewport

```javascript
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
```

### 3 - Scroll to anchor ID using scrollTO event and Scroll to section on link click

```javascript
navList.addEventListener("click", (event) => {
  event.preventDefault();
  link = event.target.dataset.id;
  let ele = document.querySelector(`#${link}`);
  ele.scrollIntoView({ behavior: "smooth" });
});
```

 -->

# License

[udacity](https://www.udacity.com/)
