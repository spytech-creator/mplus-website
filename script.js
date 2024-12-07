AOS.init({
  duration: 1000,
  once: true
});

document.getElementById('buyForm').addEventListener('submit', function (e) {
  e.preventDefault();

  if (this.checkValidity()) {
      const product = document.getElementById('product').value;
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const altphone = document.getElementById('altphone').value;
      const address = document.getElementById('address').value;

      const message = `Hello, I'm interested in buying Mplus. \n\nPackage: ${product}\n\nMy details are: \n\nName: ${name}\n\nPhone: ${phone}\n\nAlternative Phone: ${altphone}\n\nAddress: ${address}\n\n`;

      const whatsappUrl = `https://wa.me/241927222?text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, '_blank');
  }

  this.classList.add('was-validated');
});

function canPlayVideo() {
  var video = document.createElement('video');
  return !!(video.canPlayType && video.canPlayType('video/mp4').replace(/no/, ''));
}

function initVideoBackground() {
  var banner = document.getElementById('banner');
  var video = banner.querySelector('video');

  if (canPlayVideo()) {
      video.style.display = 'block';
      banner.style.background = 'none';
  } else {
      video.style.display = 'none';
      banner.style.backgroundImage = "url('images/mobile-banner-bg.jpg')";
      banner.style.backgroundSize = 'cover';
      banner.style.backgroundPosition = 'center center';
  }
}

document.addEventListener('DOMContentLoaded', initVideoBackground);

window.addEventListener('scroll', function () {
  var navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});