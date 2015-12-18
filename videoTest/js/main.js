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
        $(".info").animate({right:'470px'}, {queue: false, duration: 825});
      }else{
        $(".info").animate({right:'50px'}, {queue: false, duration: 950});
      }
    });
  });
  
  //change info div text
  //depending on which video is selected
  $(function(){
    $("#video1").click(function(){
      $("#dynamicInfo").html("Going to the Doctor!");
    });
    $("#video2").click(function(){
      $("#dynamicInfo").html("Flirting at the Bar");
    });
    $("#video3").click(function(){
      $("#dynamicInfo").html("The essence of Grammar");
    });
    $("#video4").click(function(){
      $("#dynamicInfo").html("Talking about Sports!");
    });
    $("#video5").click(function(){
      $("#dynamicInfo").html("Watch Video 5!");
    });
    $("#video6").click(function(){
      $("#dynamicInfo").html("Watch Video 6!");
    });
    $("#video7").click(function(){
      $("#dynamicInfo").html("Watch Video 7!");
    });
    $("#video8").click(function(){
      $("#dynamicInfo").html("Watch Video 8!");
    });
  });

});