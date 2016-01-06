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
      if($(this).parent().css("right") == "-380px"){
        //animate it out
        $(this).parent().animate({right:'0px'}, {queue: false, duration: 825});
      }else{
        //animate it back in
        $(this).parent().animate({right:'-380px'}, {queue: false, duration: 950});
        //hide any video when slideout goes away
        $(".video").css("visibility", "hidden");
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
  
  //toggle function
  //once user clicks on a new video
  //this function checks to see which video is selected, then de-selects it
  var toggle = function(){
    if($('#video1').hasClass("selected")){
      $('#video1').toggleClass("selected");
      $("#vid1").css("visibility", "hidden");
      // console.log("Turn off 1");
    }
    else if($('#video2').hasClass("selected")){
      $('#video2').toggleClass("selected");
      $("#vid2").css("visibility", "hidden");
    }
    else if($('#video3').hasClass("selected")){
      $('#video3').toggleClass("selected");
      $("#vid3").css("visibility", "hidden");
    }
    else if($('#video4').hasClass("selected")){
      $('#video4').toggleClass("selected");
    }
    else if($('#video5').hasClass("selected")){
      $('#video5').toggleClass("selected");
    }
    else if($('#video6').hasClass("selected")){
      $('#video6').toggleClass("selected");
    }
    else if($('#video7').hasClass("selected")){
      $('#video7').toggleClass("selected");
    }
    else if($('#video8').hasClass("selected")){
      $('#video8').toggleClass("selected");
    }
};
  
  //change info div text depending on which video is selected
  //increases font size too when a video is selected
  //this 
  $(function(){

    //when any video section is clicked
    //turn off all others
    $(".section").on("click", toggle);

    //if video is clicked, display corresponding text and also toggle the class to "selected"
    $(".headingSection").click(function(){
      $("#dynamicInfo").html("Information about the selected Video");
      $("#dynamicInfo").css("font-size", "150%");
    });
    $("#video1").click(function(){
      $("#dynamicInfo").html("Going to the Doctor!");
      $("#dynamicInfo").css("font-size", "180%");
      $(this).toggleClass("selected");
      $("#vid1").css("visibility", "visible");
    });
    $("#video2").click(function(){
      $("#dynamicInfo").html("Flirting at the Bar");
      $("#dynamicInfo").css("font-size", "180%");
      $(this).toggleClass("selected");   
      $("#vid2").css("visibility", "visible");
      // $("#bannerImg").css("visibility", "hidden");
    });
    $("#video3").click(function(){
      $("#dynamicInfo").html("The essence of Grammar");
      $("#dynamicInfo").css("font-size", "180%");
      $(this).toggleClass("selected");
      $("#vid3").css("visibility", "visible");
    });
    $("#video4").click(function(){
      $("#dynamicInfo").html("Talking about Sports!");
      $("#dynamicInfo").css("font-size", "180%");
      $(this).toggleClass("selected");
    });
    $("#video5").click(function(){
      $("#dynamicInfo").html("Watch Video 5!");
      $("#dynamicInfo").css("font-size", "180%");
      $(this).toggleClass("selected");
    });
    $("#video6").click(function(){
      $("#dynamicInfo").html("Watch Video 6!");
      $("#dynamicInfo").css("font-size", "180%");
      $(this).toggleClass("selected");
    });
    $("#video7").click(function(){
      $("#dynamicInfo").html("Watch Video 7!");
      $("#dynamicInfo").css("font-size", "180%");
      $(this).toggleClass("selected");
    });
    $("#video8").click(function(){
      $("#dynamicInfo").html("Watch Video 8!");
      $("#dynamicInfo").css("font-size", "180%");
      $(this).toggleClass("selected");
    });
  });
  
  //height variables to be used below
  var bannerHeight = $('#bannerImg').css("height");
  var windowHeight ;
  var windowWidth ;
  var modalHeight ;

  //resize slideout div
  //when window is resized grab height of banner image
  $(window).on("resize", function() {
    //apply banner image height to slideout div
    bannerHeight = $('#bannerImg').css("height");
    $('#slideout').css("height", bannerHeight);
    // console.log(height);
  });

  //change modal height
  //when the right button is clicked
  $("#watchBtn").click(function(){
    //grab window height and width
    windowHeight = $(window).height();
    windowWidth = $(window).width();
    //apply new width and height to the modal
    $('.remodal').css("height", windowHeight - 100);
    $('.remodal').css("max-width", windowWidth - 150);
    $('.modalVideo').css("height", windowHeight / 2);
    $('.modalVideo').css("width", windowWidth / 2);
    console.log();
  });

});