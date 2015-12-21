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
  $(function(){
    //once area is clicked
    $("#clickme").click(function () {
      if($(this).parent().css("right") == "-420px"){
        //animate it out
        $(this).parent().animate({right:'0px'}, {queue: false, duration: 825});
      }else{
        //animate it back in
        $(this).parent().animate({right:'-420px'}, {queue: false, duration: 950});
      }
    });
  });

  //info slide out div
  $(function(){
    $("#clickme").click(function(){
      if($(".info").css("right") == "50px"){
        //animate out
        $(".info").animate({right:'470px'}, {queue: false, duration: 825});
      }else{
        //animate back in
        $(".info").animate({right:'50px'}, {queue: false, duration: 950});
        //return to normal font
        $("#dynamicInfo").css("font-size", "150%");
      }
    });
  });
  
  $(document).on('click', function(event) {
    if (!$(event.target).closest('.section').length) {
      $(this).toggleClass("selected");
    }
  });

  //change info div text
  //depending on which video is selected
  //increases font as well
  $(function(){
    $(".headingSection").click(function(){
      $("#dynamicInfo").html("Information about the selected Video");
      $("#dynamicInfo").css("font-size", "150%");
      // $(".headingSection").toggleClass("selected");
    });
    $("#video1").click(function(){
      $("#dynamicInfo").html("Going to the Doctor!");
      $("#dynamicInfo").css("font-size", "200%");
      // $("#video1").off("click", "p", foo);
      // $("#video1").toggleClass("selected");
    });
    $("#video2").click(function(){
      $("#dynamicInfo").html("Flirting at the Bar");
      $("#dynamicInfo").css("font-size", "200%");
      // $("#video2").toggleClass("selected");
    });
    $("#video3").click(function(){
      $("#dynamicInfo").html("The essence of Grammar");
      $("#dynamicInfo").css("font-size", "200%");
      // $("#video3").toggleClass("selected");
    });
    $("#video4").click(function(){
      $("#dynamicInfo").html("Talking about Sports!");
      $("#dynamicInfo").css("font-size", "200%");
      // $("#video4").toggleClass("selected");
    });
    $("#video5").click(function(){
      $("#dynamicInfo").html("Watch Video 5!");
      $("#dynamicInfo").css("font-size", "200%");
      // $("#video5").toggleClass("selected");
    });
    $("#video6").click(function(){
      $("#dynamicInfo").html("Watch Video 6!");
      $("#dynamicInfo").css("font-size", "200%");
      // $("#video6").toggleClass("selected");
    });
    $("#video7").click(function(){
      $("#dynamicInfo").html("Watch Video 7!");
      $("#dynamicInfo").css("font-size", "200%");
      // $("#video7").toggleClass("selected");
    });
    $("#video8").click(function(){
      $("#dynamicInfo").html("Watch Video 8!");
      $("#dynamicInfo").css("font-size", "200%");
      // $("#video8").toggleClass("selected");
    });
  });
});