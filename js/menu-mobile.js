function abreMenu() {
  let navMenu = document.getElementById("nav-inner");

  if ( navMenu.x.style.display === "block"){
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "block";
  }
}