const menu = document.getElementById("menu");
menu.addEventListener("click", showMenu);
const menu_card = document.getElementById("menu-card")
const img_open = document.getElementById("open");
const img_close = document.getElementById("close");

function showMenu(e) {
  if (menu_card.classList.contains('is-active')) {
    menu_card.classList.remove('is-active');
    if(img_open.classList.contains('active')) {
      img_open.classList.remove('active');
      img_close.classList.add('active');
    } else {
      img_open.classList.add('active');
      img_close.classList.remove('active');
    }
  } else {
    menu_card.classList.add('is-active');
    if(img_open.classList.contains('active')) {
      img_open.classList.remove('active');
      img_close.classList.add('active');
    } else {
      img_open.classList.add('active');
      img_close.classList.remove('active');
    }
  }
}