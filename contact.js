// Hamburger menu toggle
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('active');
  document.getElementById('settingsPanel').classList.remove('active'); // Close settings if open
});

// Settings panel toggle
document.getElementById('settingsToggle').addEventListener('click', () => {
  document.getElementById('settingsPanel').classList.toggle('active');
  document.getElementById('mobileMenu').classList.remove('active'); // Close menu if open
});
