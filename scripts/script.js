let menuButton = document.querySelector('.menu-burger-button');
let popover = document.querySelector('.popover');
let popoverCloseButton = document.querySelector('.popover-close-button');

menuButton.onclick = function (evt) {
  evt.preventDefault();

  popover.classList.add('popover-shown');
}

popoverCloseButton.onclick = function (evt) {
  evt.preventDefault();

  popover.classList.remove('popover-shown');
}
