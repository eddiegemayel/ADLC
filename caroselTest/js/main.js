$(document).ready(function() {
	$(".container_slick").slick({
		dots:true,
		autoplay:true,
		autoplaySpeed:6000,
		speed:1000,
		slidesToShow: 1,
		slidesToScroll:1,
		cssEase:'linear',
		infinite:true,
		adaptiveHeight:true,
		arrows:false,
		accessibility:true,
		easing:'linear'
	});
});