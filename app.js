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
      sections[i].scrollIntoView({ behavior: "smooth" });

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
    if (event.target == nav) {
      return;
    }

    if (event.target == burger || event.target.parentNode == burger) {
      burger.classList.toggle("burger-active"); // Veksler mellom class burger-active og burger ved hver click
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
    console.log("index: ", index);
    sections.forEach((section, i) => {
      console.log("kjører foreach");
      if (i == index) {
        section.scrollIntoView({ behavior: "smooth" });
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
  sections[0].scrollIntoView({ behavior: "smooth" });
}

function setStates(aIndex) {
  /*endre url i adressebar*/
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

function debounce(func, timeout) {
  let timer;

  return (...args) => {
    const next = () => func(...args);

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(next, timeout > 0 ? timeout : 300);
  };
}

var debounce;
window.addEventListener(
  "wheel",
  (e) => {
    const delta = e.deltaY;
    console.log(e.deltaY);
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      if ((delta < 0 && index > 0) || (index == -1 && delta < 0)) {
        if (index == -1) {
          index = 4;
        }
        index--;
      }
      if (delta > 0 && index < 4 && index != -1) {
        index++;
      }
      if (delta > 0 && index == 4) {
        index = -1;
      }
      setStates(index);
    }, 300);
  },
  { passive: false }
);

window.addEventListener("mousemove", parralaxContainer);

function parallax(e) {
  document.querySelectorAll(".poly").forEach(function (move) {
    var moving_value = move.getAttribute("data-value");
    var x = (e.clientX * moving_value) / 100;
    var y = (e.clientY * moving_value) / 100;
    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}

function parralaxContainer(e) {
  polyContainer = document.querySelector(".polygons");
  moving_value = -10;
  var x = (e.clientX * moving_value) / 100;
  var y = (e.clientY * moving_value) / 100;
  polyContainer.style.transform =
    "translateX(" + x + "px) translateY(" + y + "px)";
}

navClick();
toggleNav();
pawClick();
