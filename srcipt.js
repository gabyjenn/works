document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.colliding-image');

    images.forEach((image) => {
      // Set initial random positions and speeds
      setPosition(image);
      image.speedX = (Math.random() - 0.5) * 2;
      image.speedY = (Math.random() - 0.5) * 2;

      // Add click event for manual movement
      image.addEventListener('click', function () {
        setPosition(image);
      });

      // Move the images continuously within the window
      moveImage(image);
    });

    function setPosition(element) {
      const maxX = window.innerWidth - element.clientWidth;
      const maxY = window.innerHeight - element.clientHeight;

      const newX = Math.floor(Math.random() * maxX);
      const newY = Math.floor(Math.random() * maxY);

      element.style.left = `${newX}px`;
      element.style.top = `${newY}px`;
    }

    function moveImage(element) {
      function animate() {
        const rect = element.getBoundingClientRect();
        const newX = rect.left + element.speedX;
        const newY = rect.top + element.speedY;

        // Check and handle collisions with window edges
        if (newX < 0 || newX > window.innerWidth - element.clientWidth) {
          element.speedX *= -1; // Reverse direction on collision
        }

        if (newY < 0 || newY > window.innerHeight - element.clientHeight) {
          element.speedY *= -1; // Reverse direction on collision
        }

        // Update position
        element.style.left = `${newX}px`;
        element.style.top = `${newY}px`;

        // Check and handle collisions with other images
        images.forEach((otherImage) => {
          if (element !== otherImage) {
            const otherRect = otherImage.getBoundingClientRect();

            if (
              newX < otherRect.right &&
              newX + element.clientWidth > otherRect.left &&
              newY < otherRect.bottom &&
              newY + element.clientHeight > otherRect.top
            ) {
              // Reverse direction on collision with another image
              element.speedX *= -1;
              element.speedY *= -1;
            }
          }
        });

        requestAnimationFrame(animate);
      }

      animate();
    }
  });