const revealItems = document.querySelectorAll('.reveal');
const cursorGlow = document.querySelector('.cursor-glow');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.16 });

revealItems.forEach((item) => observer.observe(item));

window.addEventListener('mousemove', (event) => {
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// const buttons = document.querySelectorAll('.tab-btn');
// const cards = document.querySelectorAll('.portfolio-card');
// buttons.forEach(button => {

//   button.addEventListener('click', () => {
//     buttons.forEach(btn => {
//       btn.classList.remove('active');
//     });

//     button.classList.add('active');
//     const filter = button.dataset.filter;
//     cards.forEach(card => {

//       if (card.classList.contains(filter)) {
//         card.classList.remove('hidden');
//       } else {
//         card.classList.add('hidden');
//       }

//     });
//   });
// });

const buttons = document.querySelectorAll('.tab-btn');
const cards = document.querySelectorAll('.portfolio-card');

// Default view
cards.forEach(card => {

  if (!card.classList.contains('landing')) {
    card.classList.add('hidden');
  }

});

// Tab clicks
buttons.forEach(button => {

  button.addEventListener('click', () => {
    buttons.forEach(btn => {
      btn.classList.remove('active');
    });

    button.classList.add('active');
    const filter = button.dataset.filter;
    cards.forEach(card => {

      if (card.classList.contains(filter)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }

    });

  });

});