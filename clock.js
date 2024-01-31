function startTime() {
      const today = new Date();
      let h = today.getHours();
      let m = today.getMinutes();
      let s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById('clocktext').innerHTML =  h + ":" + m + ":" + s + "";
      setTimeout(startTime, 1000);
    }
    function checkTime(i) {
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
    }

function startTime() {
  const secondHand = document.getElementById("second");
  const minuteHand = document.getElementById("minute");
  const hourHand = document.getElementById("hour");

  function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDegrees = (seconds / 60) * 360;
    const minuteDegrees = ((minutes * 60 + seconds) / 3600) * 360;
    const hourDegrees = ((hours % 12) * 3600 + minutes * 60 + seconds) / 43200 * 360;

    secondHand.style.transform = `translate(24px, 6px) rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `translate(24px, 8px) rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `translate(24px, 12px) rotate(${hourDegrees}deg)`;
  }

  updateClock(); // Update the clock immediately when the page loads

  // Update the clock every second
  setInterval(updateClock, 1000);
}

