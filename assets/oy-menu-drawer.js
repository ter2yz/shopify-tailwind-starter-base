const body = document.querySelector('body');
const menuToggle = document.querySelector('#menu-toggle');
const drawerCloseButton = document.querySelector('#drawer-close-button');
const slideMenuDrawer = document.querySelector('#slide-menu-drawer');
const slideMenuDrawerMask = document.querySelector('#slide-menu-drawer-mask');

const closeMenu = () => {
  slideMenuDrawer.classList.remove('twcss-translate-x-0');
  slideMenuDrawer.classList.add('-twcss-translate-x-full');
  body.classList.remove('twcss-overflow-hidden');
  slideMenuDrawerMask.classList.remove('twcss-opacity-100');
  slideMenuDrawerMask.classList.add('twcss-opacity-0');
  setTimeout(() => {
    slideMenuDrawer.classList.remove('twcss-block');
    slideMenuDrawer.classList.add('twcss-hidden');
    slideMenuDrawerMask.classList.remove('twcss-block');
    slideMenuDrawerMask.classList.add('twcss-hidden');
  }, 350);
};
const openMenu = () => {
  slideMenuDrawer.classList.remove('twcss-hidden');
  slideMenuDrawer.classList.add('twcss-block');
  slideMenuDrawerMask.classList.remove('twcss-hidden');
  slideMenuDrawerMask.classList.add('twcss-block');
  setTimeout(() => {
    body.classList.add('twcss-overflow-hidden');
    slideMenuDrawer.classList.remove('-twcss-translate-x-full');
    slideMenuDrawer.classList.add('twcss-translate-x-0');
    slideMenuDrawerMask.classList.remove('twcss-opacity-0');
    slideMenuDrawerMask.classList.add('twcss-opacity-100');
  }, 100);
};

menuToggle.addEventListener('click', openMenu);
drawerCloseButton.addEventListener('click', closeMenu);
slideMenuDrawerMask.addEventListener('click', closeMenu);
