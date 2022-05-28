(function () { // Función autoinvocada para proteger las variables de otros archivos
  const openButton = document.querySelector('.nav__menu');
  const menu = document.querySelector('.nav__link');
  const closeMenu = document.querySelector('.nav__close');

  openButton.addEventListener('click', () => {
    menu.classList.add('nav__link--show');
  });

  closeMenu.addEventListener('click', () => {
    menu.classList.remove('nav__link--show');
  });

  menu.classList.toggle()
})();