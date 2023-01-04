// ===== SHOW MENU ===== //
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

// Menu Show
// Validate if constant exists
if(navToggle){
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
  })
}

// Menu Hidden
// Validate if constant exists
if(navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
  })
}
// ===== end show menu ===== //

// ===== REMOVE MENU MOBILE ===== //
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
  const navMenu = document.getElementById('nav-menu')

  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));
// ===== end remove menu mobile ===== //

// ===== CHANGE BACKGROUND HEADER ===== //
function scrollHeader(){
  const header = document.getElementById('header')

  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);
// ===== end change background header ===== //

// ===== SCROLL SECTIONS ACTIVE LINK ===== //
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    }else{
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive);
// ===== end scroll sections active link ===== //

// ===== SHOW CART ===== //
const cart = document.getElementById('cart'),
      cartShop = document.getElementById('cart-shop'),
      cartClose = document.getElementById('cart-close');

// Cart Show
// Validate if constant exists
if(cartShop){
   cartShop.addEventListener('click', () =>{
      cart.classList.add('show-cart')
   })
}

// Cart Hidden
// Validate if constant exists
if(cartClose){
   cartClose.addEventListener('click', () =>{
      cart.classList.remove('show-cart')
   })
}
// ===== end show cart ===== //

// ===== HOME CAROUSEL ===== //
const homeSwiper = new Swiper('.home__container', {
   spaceBetween: 24,
   loop: true,
   grabCursor: true,

   autoplay: {
      delay: 4500,
      disableOnInteraction: false,
   },

   pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
   },
});
// ===== end home carousel ===== //

// ===== NEW SWIPER ===== //
let productSwiper = new Swiper(".product__swiper", {
   spaceBetween: 24,
   grabCursor: true,
   loop: 'true',

   breakpoints: {
      576: {
         slidesPerView: 2,
      },

      768: {
         slidesPerView: 3,
      },

      1024: {
         slidesPerView: 3,
      },
   },

   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});
// ===== end new swiper ===== //

// ===== BLOG CAROUSEL ===== //
const blogSwiper = new Swiper('.blog__container', {
   spaceBetween: 24,
   loop: true,
   grabCursor: true,

   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },

   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },

   breakpoints: {
      767: {
         slidesPerView: 2,
      },
   }
});
// ===== end blog carousel ===== //

// ===== SCROLL REVEAL ANIMATION ===== //
const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2500,
   delay: 400,
   // reset: true// animation repeat //
})

sr.reveal(`.section__title, .product__container, .google__map-box, .blog__container`)
sr.reveal(`.featured__card, .footer__content`, {interval: 100})
sr.reveal(`.story__data, .contact__information`, {origin: 'right'})
sr.reveal(`.story__images, .contact__form`, {origin: 'left'})