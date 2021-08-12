window.onload = () => {
  // Elements
  const navbarLi = document.querySelectorAll(".dropdown li");
  const dropdown = document.querySelector(".dropdown");
  // Functions
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

  // Event listeners
  navbarLi.forEach((li) => {
    li.addEventListener("click", () => {
      navbarHighlight(li);
    });
  });

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
};
