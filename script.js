AOS.init({
  duration: 1000,
  once: true,
});

document.getElementById("buyForm").addEventListener("submit", function (e) {
  e.preventDefault();

  if (this.checkValidity()) {
    const product = document.getElementById("product").value;
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const altphone = document.getElementById("altphone").value;
    const address = document.getElementById("address").value;

    const message = `Hello, I'm interested in buying Mplus. \n\nPackage: ${product}\n\nMy details are: \n\nName: ${name}\n\nPhone: ${phone}\n\nAlternative Phone: ${altphone}\n\nAddress: ${address}\n\n`;

    const whatsappUrl = `https://wa.me/241927222?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  }

  this.classList.add("was-validated");
});

function canPlayVideo() {
  var video = document.createElement("video");
  return !!(
    video.canPlayType && video.canPlayType("video/mp4").replace(/no/, "")
  );
}

function initVideoBackground() {
  var banner = document.getElementById("banner");
  var video = banner.querySelector("video");

  if (canPlayVideo()) {
    video.style.display = "block";
    banner.style.background = "none";
  } else {
    video.style.display = "none";
    banner.style.backgroundImage = "url('images/mobile-banner-bg.jpg')";
    banner.style.backgroundSize = "cover";
    banner.style.backgroundPosition = "center center";
  }
}

document.addEventListener("DOMContentLoaded", initVideoBackground);

window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Countdown Timer
function startCountdown() {
  function updateDisplay(hours, minutes, seconds) {
    document.getElementById("hours").textContent = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("minutes").textContent = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("seconds").textContent = seconds
      .toString()
      .padStart(2, "0");
  }

  function updateCountdown() {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);

    let diff = midnight - now;

    if (diff < 0) {
      // Reset to 24 hours if we've passed midnight
      diff = 24 * 60 * 60 * 1000;
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    updateDisplay(hours, minutes, seconds);
  }

  // Update immediately and then every second
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// Start the countdown when the page loads
document.addEventListener("DOMContentLoaded", startCountdown);
