document.addEventListener("DOMContentLoaded", function() { 
  // TODO //
  // Make sure there is function to check if js is available and if not then show the menu
  // Change menu text to close if dropdown is shown


  // this function runs when the DOM is ready, i.e. when the document has been parsed
  const menuText = document.querySelector('.menu__text');
  const toggleMenu = document.querySelector('.js-toggle-menu');

  menuText.addEventListener('click', () => {
     toggleMenu.classList.toggle('js-toggle-menu--open');
  })
});