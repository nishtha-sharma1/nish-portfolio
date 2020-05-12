document.addEventListener("DOMContentLoaded", function() { 
  // TODO //
  // Make sure there is function to check if js is available and if not then show the menu
  // Change menu text to close if dropdown is shown

  // this function runs when the DOM is ready, i.e. when the document has been parsed
  const menuText = document.querySelector('.menu__text');
  const toggleMenu = document.querySelector('.js-toggle-menu');

  menuText.addEventListener('click', () => {
     toggleMenu.classList.toggle('js-toggle-menu--open');
  });

  const menuLink = document.querySelectorAll('.menu__link');
  if (window.location.pathname !== "/") {
    menuText.classList.add('medium-dark');
    menuLink.forEach((i) => {
      i.classList.add('medium-dark');
    })
  }

  // Show More Function Button 
  const showMoreButton = document.querySelector('.js-show-more');
  const showMoreSection = document.querySelectorAll('.show-more-section');

  showMoreButton.addEventListener('click', () => {
    showMoreButton.classList.toggle('show-more--open');
    showMoreSection.forEach((i) => {
      i.classList.toggle('show-more-section--open');
    });
    if (showMoreButton.classList.contains('show-more--open')) {
      showMoreButton.innerHTML = 'See Less';
    } else {
      showMoreButton.innerHTML = 'See More';
    }
  });
});