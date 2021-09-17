$(function(){
 
});


new Swiper('.top-slider',{
  loop:true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  speed: 2000,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 });

new Swiper('.reviews-slider',{
  loop:true,
  slidesPerView: 1,
  speed: 1500,
  spaceBetween: 20,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
  }
 });

 var mixer = mixitup('.gallery__cases', {
  animation: {
    effectsOut: 'fade translateY(-100%)'
  }
 });



