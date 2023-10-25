// filled name in span
document.addEventListener('DOMContentLoaded', function () {
  const nameSpan = document.querySelector('.name');
  const yourName = 'Petko Todorov';
  let currentIndex = 0;

  function addNextCharacter() {
    if (currentIndex < yourName.length) {
      nameSpan.textContent += yourName[currentIndex];
      currentIndex++;
      setTimeout(addNextCharacter, 150);
    } else {
      const dotSpan = document.createElement('span');
      dotSpan.textContent = '.';
      dotSpan.style.animation = 'blink 1s infinite';
      nameSpan.appendChild(dotSpan);
    }
  }
  addNextCharacter();
});

// scroll sections
function scrollToSection(className) {
  const sections = document.getElementsByClassName(className);
  sections[0].scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}




document.addEventListener('DOMContentLoaded', function () {
  const stickyButton = document.querySelector('.sticky-button');
  let isButtonVisible = false;

  // Show the sticky button when the user scrolls down
  window.addEventListener('scroll', function () {
    if (window.scrollY > 200 && !isButtonVisible) {
      fadeIn(stickyButton);
      isButtonVisible = true;
    } else if (window.scrollY <= 200 && isButtonVisible) {
      fadeOut(stickyButton);
      isButtonVisible = false;
    }
  });

  function fadeIn(element) {
    element.style.opacity = 0;
    element.style.display = 'block';
    let opacity = 0;
    const duration = 50; // Adjust the duration as needed
    const interval = 10;
    const increment = interval / duration;

    const fade = function () {
      opacity += increment;
      element.style.opacity = opacity;

      if (opacity >= 1) {
        clearInterval(fadeInterval);
      }
    };

    element.style.opacity = opacity;
    const fadeInterval = setInterval(fade, interval);
  }

  function fadeOut(element) {
    let opacity = 1;
    const duration = 100; // Adjust the duration as needed
    const interval = 10;
    const decrement = interval / duration;

    const fade = function () {
      opacity -= decrement;
      element.style.opacity = opacity;

      if (opacity <= 0) {
        element.style.display = 'none';
        clearInterval(fadeInterval);
      }
    };

    element.style.opacity = opacity;
    const fadeInterval = setInterval(fade, interval);
  }

  stickyButton.addEventListener('click', function () {
    scrollToTop();
  });

  function scrollToTop() {
    const startPosition = window.scrollY;
    const duration = 100; // Adjust the duration as needed
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

function showImage(newSrc) {
  let overlay = document.getElementById("overlay");
  let overlayImage = document.getElementById("overlay-image");

  overlay.style.display = "block";
  overlayImage.src = newSrc;
}

function hideImage() {
  let overlay = document.getElementById("overlay");
  let overlayImage = document.getElementById("overlay-image");

  overlay.style.display = "none";
  overlayImage.src = ""; 
}




