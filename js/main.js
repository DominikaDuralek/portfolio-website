import '../css/modern-normalize.css';
import '../css/style.css';

import '../css/components/header.css';
import '../css/components/hero.css';
import '../css/components/about.css';
import '../css/components/skills.css';
import '../css/components/projects.css';
import '../css/components/contact.css';
import '../css/components/footer.css';
import '../css/components/mobile-nav.css';
import '../css/utils.css';

import mobileNav from './utils/mobile-nav';
import darkMode from './utils/dark-mode';

import AOS from "aos";
import "aos/dist/aos.css";

// Init AOS animation
AOS.init({
  duration: 800,
  offset: 100,
});

mobileNav();
darkMode();

// Remove FOUC
window.onload = function () {
  document.body.style.visibility = 'visible';
}

// The 'up' button
let buttonUp = document.querySelector('.button-up');
buttonUp.addEventListener('click', goUp);

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollPage() };

function scrollPage() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonUp.style.display = "block";
  } else {
    buttonUp.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function goUp() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Alert user about a copied email
let emailText = document.querySelector('.contact__text-email');

// Email copied on click alert
emailText.addEventListener('click', function () {
  let copyText = event.target.textContent;
  navigator.clipboard.writeText(copyText);
  showCopyAlert();
});

function showCopyAlert() {
  let copyAlert = document.querySelector('.contact__copied');
  copyAlert.classList.add('show');
  setTimeout(() => { copyAlert.classList.remove('show'); }, 1000);
}

// Show/hide about sections
document.querySelector('#about__link-summary').addEventListener('click', function () {
  document.querySelector('.about__summary').style.display = 'flex';
  document.querySelector('.about__experience').style.display = 'none';
  document.querySelector('.about__hobbies').style.display = 'none';
});

document.querySelector('#about__link-experience').addEventListener('click', function () {
  document.querySelector('.about__summary').style.display = 'none';
  document.querySelector('.about__experience').style.display = 'flex';
  document.querySelector('.about__hobbies').style.display = 'none';
});

document.querySelector('#about__link-hobbies').addEventListener('click', function () {
  document.querySelector('.about__summary').style.display = 'none';
  document.querySelector('.about__experience').style.display = 'none';
  document.querySelector('.about__hobbies').style.display = 'flex';
});

// Cursor animation
var cursor = document.getElementById("circle");
var cursorSmall = document.getElementById("circle-small");

document.body.addEventListener("mousemove", function (e) {
  cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px";

  cursorSmall.style.left = e.clientX + "px",
    cursorSmall.style.top = e.clientY + "px";
});

// Shrink cursor effect when hovering over links
const allLinks = document.querySelectorAll('a, button, .about__link, .contact__text-email');
allLinks.forEach(link => {
  link.onmouseover = function(){
    cursor.style.width = 0;
    cursor.style.height = 0;

    cursorSmall.style.backgroundColor = "transparent";
    cursorSmall.style.border = "1px solid rgba(150, 150, 150, 0.4)";
    cursorSmall.style.outline = "1px solid rgba(255, 255, 255, 0.5)";
    cursorSmall.style.width = '15px';
    cursorSmall.style.height = '15px';
  }
  link.onmouseleave = function(){
    cursor.style.width = '60px';
    cursor.style.height = '60px';

    cursorSmall.style.backgroundColor = "rgba(150, 150, 150, 0.4)";
    cursorSmall.style.border = "none";
    cursorSmall.style.outline = "none";
    cursorSmall.style.width = '10px';
    cursorSmall.style.height = '10px';
  }
});


