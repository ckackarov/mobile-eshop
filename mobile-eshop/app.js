// Search-btn Toggle
let searchForm = document.querySelector(".search-form");

document.getElementById("search-btn").onclick = () => {
  searchForm.classList.toggle("active");
};

// Nav menu
let navBar = document.querySelector(".navbar");

// When scroll  elements removed
window.onscroll = () => {
  searchForm.classList.remove("active");
  navBar.classList.remove("active");
  subMenuContainer.classList.remove("active");
};

// Menu toggle
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");

[openBtn, closeBtn].forEach((btn) => {
  btn.addEventListener("click", () => {
    navBar.classList.toggle("active");
    subMenuContainer.classList.remove("active");
    searchForm.classList.remove("active");

    if (navBar.classList.contains("active")) {
      openBtn.style.display = "none";
      closeBtn.style.display = "block";
    } else {
      openBtn.style.display = "block";
      closeBtn.style.display = "none";
    }
  });
});

// Open Sub-Menu
const clothes = document.querySelector(".clothes");
const backIcon = document.querySelector(".back-icon");
const subMenuContainer = document.querySelector(".sub-menu-container");

clothes.addEventListener("click", () => {
  subMenuContainer.classList.add("active");
});

backIcon.addEventListener("click", () => {
  subMenuContainer.classList.remove("active");
});
