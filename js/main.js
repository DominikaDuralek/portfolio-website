import '../css/modern-normalize.css';
import '../css/style.css';

import '../css/components/header.css';
import '../css/components/hero.css';
import '../css/components/about.css';
import '../css/components/skills.css';
import '../css/components/projects.css';
import '../css/components/contact.css';
import '../css/components/footer.css';
import '../css/utils.css';

import darkMode from './utils/dark-mode';

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
  duration: 800,
  offset: 100,
});

darkMode();

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

let emailText = document.querySelector('.contact__text-email');

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

// div1 div2 div3
// div1 = flex div2 = none div3 = none
// link1 click = div1 flex div2 none div3 none
// link2 click = div2 flex div1 none div3 none
// link3 click = div3 flex div1 none div2 none

document.querySelector('#about__link-summary').addEventListener('click', function() {
  document.querySelector('.about__summary').style.display = 'flex';
  document.querySelector('.about__experience').style.display = 'none';
  document.querySelector('.about__hobbies').style.display = 'none';
});

document.querySelector('#about__link-experience').addEventListener('click', function() {
  document.querySelector('.about__summary').style.display = 'none';
  document.querySelector('.about__experience').style.display = 'flex';
  document.querySelector('.about__hobbies').style.display = 'none';
});

document.querySelector('#about__link-hobbies').addEventListener('click', function() {
  document.querySelector('.about__summary').style.display = 'none';
  document.querySelector('.about__experience').style.display = 'none';
  document.querySelector('.about__hobbies').style.display = 'flex';
});
