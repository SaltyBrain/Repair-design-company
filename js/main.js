document.addEventListener("DOMContentLoaded", function(event) { 
   const modal = document.querySelector('.modal');
   const modalButton = document.querySelectorAll('[data-toggle = modal]');
   const closeBtn = document.querySelector('.modal__close');
   const switchModal = () => {
    modal.classList.toggle('modal--visible');
   }

   //adding modal--visible for click
  modalButton.forEach (element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);

  window.addEventListener("click", function(event) {
    if (event.target == modal) {
      modal.classList.remove('modal--visible');
  }
  });

});