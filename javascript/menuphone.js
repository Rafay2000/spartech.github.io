const menu = document.getElementById("nav-menu");

const hamMenu = () => {
  if (menu.style.display == "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
};
