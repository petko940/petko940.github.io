document.addEventListener('DOMContentLoaded', function () {
  const stickyButton = document.querySelector('.sticky-button');

  stickyButton.addEventListener('click', function () {
    scrollToTop();
  });

  // Show the sticky button when the user scrolls down
  window.addEventListener('scroll', function () {
    if (window.scrollY > 200) { // Adjust the value as needed
      stickyButton.classList.add('active');
    } else {
      stickyButton.classList.remove('active');
    }
  });

  function scrollToTop() {
    const startPosition = window.scrollY;
    const duration = 200; // Adjust the duration as needed
    const startTime = performance.now();

    function scrollStep(timestamp) {
      const currentTime = timestamp - startTime;
      const progress = Math.min(currentTime / duration, 1);

      window.scrollTo(0, startPosition * (1 - progress));

      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    }

    requestAnimationFrame(scrollStep);
  }
});
