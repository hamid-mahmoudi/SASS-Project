let menu = document.getElementById("showMenu");
let burgerBtn = document.querySelector(".burgermenu");
let clicked = false;
burgerBtn.addEventListener("click", () => {
  if (clicked === false) {
    menu.style.display = "block";
    clicked = true;
    document.body.style.overflow="hidden"
  } else if (clicked === true) {
    menu.style.display = "none";
    clicked = false;
    document.body.style.overflow="scroll"

  }
});
window.addEventListener('resize', function(){
    if(window.screen.width > 768 && menu.style.display === "block"){
      menu.style.display = "none";
    }
  });