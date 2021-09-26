var offset = 200;
 var duration = 400;
 $(window).on('scroll', function() {
   if ($(this).scrollTop() > offset) {
    $('.scroll-top').addClass('scroll-top--active');
   } else {
    $('.scroll-top').removeClass('scroll-top--active');
   }
 });       
 $('.scroll-top').on('click', function(event) {
   event.preventDefault();
   $('html, body').animate({scrollTop: 0}, duration);
   return false;
 })


$(function(){

  	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
    $('body').toggleClass('body-active');
    $('main').toggleClass('main--active');
  });
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