
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".service-slide");
  let currentSlide = 0;
  const interval = 5000;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide);
  setInterval(nextSlide, interval);
});
