document.addEventListener("DOMContentLoaded", function() { 
  // TODO //
  // Make sure there is function to check if js is available and if not then show the menu
  // Change menu text to close if dropdown is shown

  // this function runs when the DOM is ready, i.e. when the document has been parsed
  const menuText = document.querySelector('.menu__text');
  const toggleMenu = document.querySelector('.js-toggle-menu');

  menuText.addEventListener('click', () => {
     toggleMenu.classList.toggle('js-toggle-menu--open');
     if (toggleMenu.classList.contains('js-toggle-menu--open')) {
      menuText.innerHTML = 'Close';
     } else {
      menuText.innerHTML = 'Menu';
     } 
  });

  // Debounce function for scroll
  // From: https://medium.com/@TCAS3/debounce-deep-dive-javascript-es6-e6f8d983b7a1
  // TODO: Learn this function. 
  const debounce = (fn, time) => {
    let timeout;
  
    return function() {
      const functionCall = () => fn.apply(this, arguments);
      
      clearTimeout(timeout);
      timeout = setTimeout(functionCall, time);
    }
  }

  const w = window.innerWidth;

  window.addEventListener('resize', debounce((e)=>{
    if (w > 768) {
      toggleMenu.classList.remove('js-toggle-menu--open');
      menuText.innerHTML = 'Menu';
    }
  } ,1000));

  const contactFormButton = document.querySelector('.js-contact');
  const contactForm = document.querySelector('.form__wrapper');
  const closeButton = document.querySelector('.js-close');

  contactFormButton.addEventListener('click', () => {
    contactForm.classList.add('form__wrapper--open');
    contactForm.addEventListener('click', (e) => {
      const place = e.target.closest('.form__contact');
      if (!place) {
        contactForm.classList.remove('form__wrapper--open');
      }
    })
  });

  closeButton.addEventListener('click', () => {
    contactForm.classList.remove('form__wrapper--open');
  });

  // Change text color by page
  const menuLink = document.querySelectorAll('.menu__link');
  const homeLink = document.querySelector('.home__link');
  const logoText = document.querySelector('.logo-text');

  if (window.location.pathname === "/") {
    menuText.classList.add('white-menu-text');
    logoText.classList.add('logo-text-opposite');
    menuLink.forEach((i) => {
      i.classList.add('white');
    });
    homeLink.classList.add('home-link-hide');
  }
});