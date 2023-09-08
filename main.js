const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
const navLink = document.querySelectorAll(".nav-link");
const linkAction = () => {
  document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

//bu olay mesela home' a tıkladığımda menu ortadan kalkıyor.

const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.add.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);
//bu kod üst menüdeki aşağı doğru kaymaya başlayınca gölge oluşturması için

const scrollup = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollup.classList.add("show-scroll")
    : scrollup.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollup);
//bu kod küçük ok için

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");
    sectionClass = document.querySelector(
      ".nav-menu a[href*=" + sectionId + "]"
    );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);
//hangi menüye tıklarsa o menü o stil özelliklerinde olacak
//Aşağı doğru indikçede hangi menüdeyse o belli olacak

//Dark Theme
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.body.classList.contains(iconTheme)
    ? "ri-moon-line"
    : "ri-sun-line";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme);
  localStorage.setItem("selected-icon", getCurrentIcon);
});

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // resert:true,
});

sr.reveal(`.home-data, .join-container, .footer`);
sr.reveal(`.home-img`, { origin: "bottom" });
sr.reveal(`.enjoy-card, .popular-card`, { interval: 100 });
sr.reveal(`.about-data`, { origin: "right" });
sr.reveal(`.about-img`, { origin: "left" });
