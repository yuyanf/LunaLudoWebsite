const pawButton = document.querySelector(".pawButton");
const sections = document.querySelectorAll("section");
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navText = document.querySelectorAll(".nav-text");

const idlePeriod = 100;
const animationDuration = 1000;
let lastAnimation = 0;
let index = 0;

function navClick() {
  navText.forEach((text, i) => {
    navText[i].addEventListener("click", () => {
      setStates(i);
      sections[i].scrollIntoView();

      if (i >= sections.length - 1) {
        pawButton.classList.add("pawButtonEnd");
        index = -1;
      } else {
        pawButton.classList.remove("pawButtonEnd");
      }
    });
  });
}

function toggleNav() {
  window.addEventListener("click", (event) => {
    if (event.target == nav || event.target.parentNode == nav) {
      return;
    }

    if (event.target == burger || event.target.parentNode == burger) {
      burger.classList.toggle("burger-active");
      nav.classList.toggle("nav-active");
    } else {
      burger.classList.remove("burger-active");
      nav.classList.remove("nav-active");
    }
  });
}

function pawClick() {
  pawButton.addEventListener("click", () => {
    if (index == -1) pawButton.classList.remove("pawButtonEnd");
    index++;

    sections.forEach((section, i) => {
      if (i == index) {
        section.scrollIntoView();
      }
    });

    setStates(index);

    if (index >= sections.length - 1) {
      pawButton.classList.add("pawButtonEnd");
      index = -1;
    }
  });
}

function goToHome() {
  sections[0].scrollIntoView();
}

function setStates(aIndex) {
  index = aIndex;
  switch (aIndex) {
    case 0:
      window.history.pushState(null, null, "#home");
      break;
    case 1:
      window.history.pushState(null, null, "#story");
      break;
    case 2:
      window.history.pushState(null, null, "#stats");
      break;
    case 3:
      window.history.pushState(null, null, "#timeline");
      break;
    case 4:
      window.history.pushState(null, null, "#about");
      break;
  }
}

navClick();
toggleNav();
pawClick();
