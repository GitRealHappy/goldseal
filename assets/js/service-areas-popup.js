document.addEventListener('DOMContentLoaded', function() {
  const openButton = document.querySelector('.service-areas-button');
  const popup = document.getElementById('serviceAreasPopup');
  const closeButton = document.querySelector('.service-areas-popup-close');

  if (openButton && popup && closeButton) {
    openButton.addEventListener('click', function() {
      popup.classList.add('is-visible');
      popup.setAttribute('aria-hidden', 'false');
      // Optional: trap focus inside the modal
      // closeButton.focus();
    });

    closeButton.addEventListener('click', function() {
      popup.classList.remove('is-visible');
      popup.setAttribute('aria-hidden', 'true');
      // Optional: return focus to the trigger button
      // openButton.focus();
    });

    // Close popup if clicking outside content
    popup.addEventListener('click', function(event) {
      if (event.target === popup) {
        popup.classList.remove('is-visible');
        popup.setAttribute('aria-hidden', 'true');
        // openButton.focus();
      }
    });

    // Close popup with Escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && popup.classList.contains('is-visible')) {
        popup.classList.remove('is-visible');
        popup.setAttribute('aria-hidden', 'true');
        // openButton.focus();
      }
    });
  }
});