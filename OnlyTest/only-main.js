  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.expand-button');
  
    buttons.forEach(button => {

      button.addEventListener('click', () => {

            button.classList.toggle('clicked');
            button.classList.toggle('unclicked'); 

        })
  
    });
  });
  
  