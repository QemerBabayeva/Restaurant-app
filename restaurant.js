const hamburgerMenu = document.querySelector(".hamburgerMenu");
const xIcon = document.querySelector(".hamburgerMenu .fa-solid");
const hamburgerIcon = document.querySelector(".hamburgerIcon");
const listNavbar = document.querySelectorAll(".navbar li");
const listMenu = document.querySelectorAll(".hamburgerMenu li");
const searchConatiner = document.querySelector(".searchConatiner");
const closeIcon = document.querySelector(".fa-xmark");
const searchIcon = document.querySelector(".searchIcon");

searchIcon.addEventListener("click", () => {
  searchConatiner.classList.add("active");
});
closeIcon.addEventListener("click", () => {
  searchConatiner.classList.remove("active");
});

hamburgerIcon.addEventListener("click", () => {
  hamburgerMenu.style.display = "flex";
});

xIcon.addEventListener("click", () => {
  hamburgerMenu.style.display = "none";
});

listNavbar.forEach((item) => {
  item.addEventListener("click", () => {
    listNavbar.forEach((item) => {
    item.classlist.remove("active");
    });
    item.classlist.add("active");
  });
});

listMenu.forEach((item2) => {
  item2.addEventListener("click", () => {
    hamburgerMenu.style.display = "none";
  });
});
