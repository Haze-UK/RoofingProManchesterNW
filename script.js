// Testimonial Data
const testimonials = [
  {
    stars: 5,
    text: "Peter constructed our flat roof to perfection. His efficiency and clean workmanship stood out. Everything was done as planned. Great job overall.",
    author: "Katherin Robinson.",
    meta: "1 Week ago · Google"
  },
  {
    stars: 5,
    text: "James worked efficiently and professionally throughout. He built our flat roof with great care. Very knowledgeable and tidy. We’re extremely pleased.",
    author: "Connor Davidson.",
    meta: "1 week ago · Google"
  },
    {
    stars: 5,
    text: "Eddie managed our flat roof build perfectly. Everything was done on time and to a high standard. A real expert in his field. Fantastic service overall.",
    author: "Grady Oakley.",
    meta: "1 week ago · Google"
  },
      {
    stars: 5,
    text: "Eddie took care of our chimney repair efficiently. He worked cleanly, managed the process well, and showed real expertise throughout the project.",
    author: "Minu Osan.",
    meta: "2 week ago · Google"
  },
        {
    stars: 5,
    text: "Highly satisfied! Their team was polite, efficient and did a fantastic job on my roof. Great company to work with!",
    author: "Ryland Zyair.",
    meta: "3 week ago · Google"
  }
];

let current = 0;
const container = document.getElementById("testimonial-slider");

function renderTestimonial(index) {
  const t = testimonials[index];
  const stars = '★'.repeat(t.stars) + '☆'.repeat(5 - t.stars);
  container.innerHTML = `
    <div class="testimonial-slide active">
      <div class="testimonial-stars">${stars}</div>
      <div class="testimonial-text">"${t.text}"</div>
      <div class="testimonial-author">${t.author}</div>
      <div class="testimonial-meta">${t.meta}</div>
    </div>
  `;
}

// Initialize first testimonial if container exists
if (container) {
  renderTestimonial(current);
  setInterval(() => {
    current = (current + 1) % testimonials.length;
    renderTestimonial(current);
  }, 5000);
}

// Hamburger and Settings Panel
const menuToggle = document.getElementById('menuToggle');
const settingsToggle = document.getElementById('settingsToggle');
const mobileMenu = document.getElementById('mobileMenu');
const settingsPanel = document.getElementById('settingsPanel');

menuToggle?.addEventListener('click', () => {
  mobileMenu?.classList.toggle('active');
  settingsPanel?.classList.remove('active');
});

settingsToggle?.addEventListener('click', () => {
  settingsPanel?.classList.toggle('active');
  mobileMenu?.classList.remove('active');
});

window.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('promo-popup');
  const closeBtn = document.querySelector('.popup-close');

  if (!sessionStorage.getItem('popupShown')) {
    setTimeout(() => {
      popup.classList.add('active');
      sessionStorage.setItem('popupShown', 'true');
    }, 4000);
  }

  closeBtn.addEventListener('click', () => {
    popup.classList.remove('active');
  });
});

