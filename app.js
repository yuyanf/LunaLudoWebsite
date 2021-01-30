const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const body = document.querySelector("body");

function toggleNav() {
  window.addEventListener("click", (event) => {
    // Do nothing if nav or ul is clicked
    if (event.target == nav || event.target.parentNode == nav) {
      return;
    }

    if (event.target == burger || event.target.parentNode == burger) {
      burger.classList.toggle("burger-active"); // Veksler mellom class burger-active og burger ved hver click
      nav.classList.toggle("nav-active");
      body.classList.toggle("body-active");
    } else {
      burger.classList.remove("burger-active");
      nav.classList.remove("nav-active");
    }
  });
}

window.addEventListener("mousemove", parralaxContainer);

function parallax(e) {
  document.querySelectorAll(".poly").forEach(function (move) {
    var moving_value = move.getAttribute("data-value");
    var x = ((e.clientX - window.innerWidth / 2) * moving_value) / 100;
    var y = ((e.clientY - window.innerHeight / 2) * moving_value) / 100;
    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}

function parralaxContainer(e) {
  polyContainer = document.querySelector(".polygons");
  moving_value = -10;
  var x = ((e.clientX - window.innerWidth / 2) * moving_value) / 100;
  var y = ((e.clientY - window.innerHeight / 2) * moving_value) / 100;
  polyContainer.style.transform =
    "translateX(" + x + "px) translateY(" + y + "px)";
}

toggleNav();

(function () {
  document.onreadystatechange = () => {
    if (document.readyState === "complete") {
      /**
       * Setup your Lazy Line element.
       * see README file for more settings
       */

      let el = document.querySelector("#line");
      let myAnimation = new LazyLinePainter(el, {
        ease: "easeInOutQuad",
        strokeWidth: 1,
        strokeOpacity: 1,
        strokeColor: "#222F3D",
        reverse: true,
      });
      myAnimation.paint();
    }
  };
})();
