document.getElementById("buyForm").addEventListener("submit", function (e) {
  e.preventDefault();

  if (this.checkValidity()) {
    const product = document.getElementById("product").value;
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const altphone = document.getElementById("altphone").value;
    const address = document.getElementById("address").value;

    const message = `Hello, I'm interested in buying Mplus. \n\nPackage: ${product}\n\nMy details are: \n\nName: ${name}\n\nPhone: ${phone}\n\nAlternative Phone: ${altphone}\n\nAddress: ${address}\n\n`;

    // Replace '1234567890' with your actual WhatsApp number
    const whatsappUrl = `https://wa.me/241927222?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  }

  this.classList.add("was-validated");
});

// Check if the device can play video
function canPlayVideo() {
  var video = document.createElement("video");
  return !!(
    video.canPlayType && video.canPlayType("video/mp4").replace(/no/, "")
  );
}

// Function to initialize video background
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

// Run the initialization when the DOM is ready
document.addEventListener("DOMContentLoaded", initVideoBackground);
