/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
    })
  }
}


showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollDown = window.scrollY

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link')
    } else {
      sectionsClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
  //     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', {
  delay: 400
});
sr.reveal('.home__social-icon', {
  interval: 200
});
sr.reveal('.skills__data, .work__img, .contact__input', {
  interval: 200
});



// main.js

// Function to simulate typing effect
function typeEffect(element, text, speed) {
  element.innerHTML = '';

  let i = 0;
  const interval = setInterval(function () {
    element.innerHTML += text.charAt(i);
    i++;

    if (i > text.length) {
      clearInterval(interval);

      // Optionally, add a delay before resetting the animation
      setTimeout(function () {
        typeEffect(element, text, speed); // Restart the typing effect
      }, 1000); // Adjust the delay as needed
    }
  }, speed);
}

// main.js

document.addEventListener('DOMContentLoaded', function () {
  // Select the elements you want to apply the typing effect
  const titles = document.querySelectorAll('.poems__title');

  // Set the typing speed (adjust as needed)
  const typingSpeed = 100; // milliseconds

  // Apply the typing effect to each selected element
  titles.forEach(function (title) {
    const originalText = title.innerHTML;
    typeEffect(title, originalText, typingSpeed);
  });
  // JavaScript for Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

});