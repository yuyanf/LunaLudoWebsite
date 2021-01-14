const pawButton = document.querySelector(".pawButton");
const sections = document.querySelectorAll("section");
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navText = document.querySelectorAll(".nav-text");

function navClick() {
  navText.forEach((text, i) => {
    navText[i].addEventListener("click", () => {
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

    if (index >= sections.length - 1) {
      pawButton.classList.add("pawButtonEnd");
      index = -1;
    }
  });
}

function goToHome() {
  sections[0].scrollIntoView({ behavior: "smooth" });
}

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
