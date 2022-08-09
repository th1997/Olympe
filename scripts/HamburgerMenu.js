var sidenav = document.getElementById("head_menu");
var openBtn = document.getElementById("openBtn");

openBtn.onclick = openCloseMenu;

function openCloseMenu(){
  if(openBtn.classList.contains("active")){
    /* Set the width of the side navigation to 0 */
    sidenav.classList.remove("active");
    openBtn.classList.remove("active");
  } else{
    /* Set the width of the side navigation to 250px */
    sidenav.classList.add("active");
    openBtn.classList.add("active");
  }
}