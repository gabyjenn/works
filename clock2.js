document.addEventListener("DOMContentLoaded", function () {
  const followCursor = document.querySelector(".clock");

  document.addEventListener("mousemove", function (e) {
    // Update the position of the follow-cursor element based on the mouse coordinates
    const x = e.clientX;
    const y = e.clientY;

    followCursor.style.left = x + "px";
    followCursor.style.top = y + "px";
  });
});