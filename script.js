window.onload = () => {
  // Elements
  const navbarLi = document.querySelectorAll(".dropdown li");
  const dropdown = document.querySelector(".dropdown");
  const learnMore = document.querySelectorAll(".learn-more > a");

  // Functions
  function hover(event) {
    let learnMore = event.target.nextElementSibling;

    if (event.type == "mouseover") {
      learnMore.classList.contains("red-line")
        ? (learnMore.style.backgroundColor = "hsla(7, 99%, 70%, .9)")
        : (learnMore.style.backgroundColor = "hsla(51, 100%, 49%, 0.9)");
    } else if (event.type == "mouseout") {
      learnMore.classList.contains("red-line")
        ? (learnMore.style.backgroundColor = "hsla(7, 99%, 70%, .2)")
        : (learnMore.style.backgroundColor = "hsla(51, 100%, 49%, 0.2)");
    }
  }
  function removeHighlights() {
    navbarLi.forEach((li) => {
      li.firstChild.nextElementSibling.firstChild.classList.remove(
        "navbar-highlight"
      );
    });
  }

  function navbarHighlight(event) {
    removeHighlights();

    event.firstChild.nextElementSibling.firstChild.classList.add(
      "navbar-highlight"
    );
  }

  function colorDesktopNavbar(navItem) {
    navItem.classList.add("navbarHover");
  }

  window.onclick = function (event) {
    if (
      !event.target.matches(".navbar img") &&
      !event.target.matches(".dropdown li") &&
      !event.target.matches(".dropdown p")
    ) {
      dropdown.style.display = "none";
    } else {
      if (
        dropdown.style.display == "block" &&
        event.target.matches(".navbar img")
      ) {
        dropdown.style.display = "none";
      } else {
        dropdown.style.display = "block";
      }
    }
  };

  // Event listeners
  navbarLi.forEach((li) => {
    li.addEventListener("click", () => {
      navbarHighlight(li);
    });
  });

  learnMore.forEach((item) => {
    item.addEventListener("mouseover", hover);
    item.addEventListener("mouseout", hover);
  });
};
