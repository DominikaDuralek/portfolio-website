const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');
  
    // State - open/closed
    let isMobileNavOpen = false;
  
    // Open/close mobile nav when bars icon gets clicked
    headerBtn.addEventListener('click', () => {
      isMobileNavOpen = !isMobileNavOpen;
      if (isMobileNavOpen) {
        mobileNav.style.display = 'flex';
        document.body.style.overflowY = 'hidden';
      } else {
        mobileNav.style.display = 'none';
        document.body.style.overflowY = 'auto';
      }
    });
  
    // Hide mobile nav when link gets clicked
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        isMobileNavOpen = false;
        mobileNav.style.display = 'none';
        document.body.style.overflowY = 'auto';
      });
    });
  };
  
  export default mobileNav;