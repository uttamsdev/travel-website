const bars = document.querySelector(".bars");
const navbar = document.querySelector(".nav-bar");
bars.onclick = () => {
  const navBar = document.querySelector(".nav-items");
  navBar.classList.toggle("active");
};

window.onscroll = () => {
    this.scrollY > 1000 ? navbar.classList.add("stickyx") : navbar.classList.remove("stickyx");
  };