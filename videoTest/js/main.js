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

  //section click, hide/show button
  // $(function(){
  //   $(".section").click(function(){
  //     if($("#watchBtn").css("visibility") == "visible"){
  //       $("#watchBtn").css("visibility", "hidden");
  //       console.log("hide");
  //     }else{
  //       $("#watchBtn").css("visibility", "visible");
  //       console.log("show");
  //     }
  //   });
  // });
  
  //change button text
   $(function(){
    $("#video1").click(function(){
      $("#watchBtn").html("Video 1");
    });
    $("#video2").click(function(){
      $("#watchBtn").html("Video 2");
    });
    $("#video3").click(function(){
      $("#watchBtn").html("Video 3");
    });
    $("#video4").click(function(){
      $("#watchBtn").html("Video 4");
    });
    $("#video5").click(function(){
      $("#watchBtn").html("Video 5");
    });
    $("#video6").click(function(){
      $("#watchBtn").html("Video 6");
    });
    $("#video7").click(function(){
      $("#watchBtn").html("Video 7");
    });
    $("#video8").click(function(){
      $("#watchBtn").html("Video 8");
    });
  });

});