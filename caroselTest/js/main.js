$(document).ready(function() {

	//slick carousel
	$(".container_slick").slick({
		autoplay:true,
		autoplaySpeed:6000,
		speed:1000,
		dots:true,
		slidesToShow: 1,
		slidesToScroll:1,
		infinite:true,
		adaptiveHeight:true,
		arrows:false,
		accessibility:true,
		useCSS:true,
		cssEase:'linear',
		easing:'linear',
		swipe:true,
		mobileFirst:true
	});

	//Hiding certain buttons
	$('#want-a-discount--button').on('click', function () {
    	$('#want-a-discount--form').addClass('is-visible')
    	$('.bloco-destaque').toggleClass('is-visible')
  		});

  	$('#want-a-discount--button2').on('click', function () {
    	$('#want-a-discount--form2').addClass('is-visible')
    	$('.bloco-destaque').toggleClass('is-visible')
  	});

  	$('#want-a-discount--button3').on('click', function () {
    	$('#want-a-discount--form3').addClass('is-visible')
    	$('.bloco-destaque').toggleClass('is-visible')
  	});
});