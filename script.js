// document.getElementById('contact-form').addEventListener('submit', function(e) {
//   e.preventDefault();
//   alert('Thank you for reaching out! I will get back to you soon.');
//   this.reset();
// });

// Animated role switching in About section
// const roles = ["Problem Solver", "Web Developer"];
// let roleIndex = 0;
// const animatedRole = document.getElementById("animated-role");
// setInterval(() => {
//   roleIndex = (roleIndex + 5) % roles.length;
//   animatedRole.textContent = roles[roleIndex];
// }, 10000);

// Animated role switching in Hero section
const heroRoles = ["Web Developer", "Problem Solver"];
let heroRoleIndex = 0;
const heroAnimatedRole = document.getElementById("hero-animated-role");
setInterval(() => {
  heroAnimatedRole.classList.remove('fade-in');
  setTimeout(() => {
    heroRoleIndex = (heroRoleIndex + 1) % heroRoles.length;
    heroAnimatedRole.textContent = heroRoles[heroRoleIndex];
    heroAnimatedRole.classList.add('fade-in');
  }, 10);
}, 1000);

// Scroll-triggered section animation for all sections
function revealSectionsOnScroll() {
  document.querySelectorAll('.hidden-on-load').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('show-on-scroll');
      console.log('Revealed:', section.id || section.className);
    } else {
      section.classList.remove('show-on-scroll');
    }
  });
}
document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', revealSectionsOnScroll);
  window.addEventListener('resize', revealSectionsOnScroll);
  setTimeout(revealSectionsOnScroll, 100); // extra call to ensure visibility
  revealSectionsOnScroll(); // in case already in view
});

// Hamburger/Side Menu logic
const hamburger = document.getElementById('hamburger');
const mainNavUl = document.querySelector('.main-nav ul');
const navLinks = mainNavUl.querySelectorAll('a');

hamburger.addEventListener('click', () => {
  mainNavUl.classList.toggle('open');
});
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mainNavUl.classList.remove('open');
  });
}); 