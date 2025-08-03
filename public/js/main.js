document.addEventListener('DOMContentLoaded', () => {
  const openButtons = document.querySelectorAll('[data-modal-target]');
  const mainContent = document.getElementById('main');
  
  openButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.getAttribute('data-modal-target');
      const modalOverlay = document.getElementById(modalId); 
      
      if (modalOverlay) {
        const modalContent = modalOverlay.querySelector('#modal-content'); 
        modalOverlay.classList.remove('hidden');
        mainContent.classList.add('blur-sm');

        modalOverlay.addEventListener('click', () => {
          modalOverlay.classList.add('hidden');
          mainContent.classList.remove('blur-sm');
        });
        modalContent.addEventListener('click', (event) => {
          event.stopPropagation(); 
        });
      }
    });
  });
});