//wait for document to be ready
$(document).ready(function() {
  	//Smooth Scroll jQuery implemented from CSS Tricks
  	$(function() {
  		$('a[href*=#]:not([href=#])').click(function() {
    		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      		var target = $(this.hash);
      		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      		if (target.length) {
        		$('html,body').animate({
          		scrollTop: target.offset().top
        	}, 1000);
        		return false;
      			}
    		}
  		});
	});
  //slide out menu
  $(function () {
    //once area is clicked
    $("#clickme").click(function () {
      if($(this).parent().css("right") == "-420px"){
        //animate it out
        $(this).parent().animate({right:'0px'}, {queue: false, duration: 800});
      }else{
        //animate it back in
        $(this).parent().animate({right:'-420px'}, {queue: false, duration: 950});}
    });
  });
});