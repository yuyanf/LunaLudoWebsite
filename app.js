const toggleNav = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");

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
};

const nextPage = () => {
  const pawButton = document.querySelector(".pawButton");
  const links = document.querySelectorAll("a");
  console.log(links);

  links.forEach((link) => {
    console.log(link.href.split("html")[1]);
  });

  pawButton.addEventListener("click", (event) => {
    console.log(window.location.href.split("html")[1]);
    switch (window.location.href.split("html")[1]) {
      case "":
        window.location.href = links[2].href;
        break;
      case "#":
        window.location.href = links[2].href;
        break;
      case "#story":
        window.location.href = links[3].href;
        break;
      case "#stats":
        window.location.href = links[4].href;
        break;
      case "#timeline":
        window.location.href = links[5].href;
        pawButton.classList.toggle("pawButtonEnd");
        break;
      case "#about":
        window.location.href = links[1].href;
        pawButton.classList.toggle("pawButtonEnd");
        break;
    }
  });
};

toggleNav();
nextPage();
