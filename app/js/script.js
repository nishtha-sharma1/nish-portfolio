document.addEventListener("DOMContentLoaded", function() { 

  // Debounce function for scroll
  // From: https://medium.com/@TCAS3/debounce-deep-dive-javascript-es6-e6f8d983b7a1
  // TODO: Learn this function. 
  // const debounce = (fn, time) => {
  //   let timeout;
  
  //   return function() {
  //     const functionCall = () => fn.apply(this, arguments);
      
  //     clearTimeout(timeout);
  //     timeout = setTimeout(functionCall, time);
  //   }
  // }

  const textSection = document.querySelectorAll('.js-dropdown');

  textSection.forEach((i) => {
    i.addEventListener('click', (e) => {
      const t = e.target;
      e.preventDefault();
      const c = t.closest('.info').querySelector('.js-text-container');
      const icon = t.closest('.info').querySelector('.fas');
      const checkParent = t.closest('.info').querySelector('.text-container__projects');

      if (c.classList.contains('text-container--hide')){
        c.classList.remove('text-container--hide');

        if (checkParent) {
          c.classList.add('text-container--flex');
        } else {
          c.classList.add('text-container--show');
        }

        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
        return;
     }

     if (c.classList.contains('text-container--show') || c.classList.contains('text-container--flex')) {
       c.classList.add('text-container--hide');

       if (checkParent) {
          c.classList.remove('text-container--flex');
        } else {
          c.classList.remove('text-container--show');
        }
      
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
        return;
     }
   });
  });
});
