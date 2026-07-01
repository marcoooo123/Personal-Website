const images = [
  "images/ITRI1.jpg",
  "images/ITRI2.jpg",
  "images/ITRI3.jpg",
  "images/ITRI4.jpg",
  "images/ITRI5.jpg",
  "images/ITRI6.jpg",
  "images/ITRI7.jpg"
];

let currentImage = 0;

const slider = document.getElementById("itri-slider");

setInterval(() => {

  slider.style.opacity = 0;

  setTimeout(() => {

    currentImage++;

    if (currentImage >= images.length) {
      currentImage = 0;
    }

    slider.src = images[currentImage];
    slider.style.opacity = 1;

  }, 500);

}, 2500);