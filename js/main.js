import '../css/modern-normalize.css';
import '../css/style.css';
import '../css/utils.css';

import '../css/components/header.css';
import '../css/components/hero.css';
import '../css/components/about.css';
import '../css/components/skills.css';
import '../css/components/projects.css';
import '../css/components/contact.css';
import '../css/components/footer.css';

// Get the button
let buttonUp = document.querySelector('.button-up')
buttonUp.addEventListener("click", goUp);

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollPage()};

function scrollPage() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
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