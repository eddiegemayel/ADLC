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
        	}, 2200);
        		return false;
      		}
    	}
  	});
	});

  //SLIDEOUT MENU TRIGGERS
  //if someone clicks the HAMBURGER MENU 
  $(function(){
    //once hamburger menu area is clicked
    $("#arrow").click(function () {
      if($("#hamburger").css("left") == "-205px"){
        //animate it out
        $("#hamburger").animate({left:'0px'}, {queue: false, duration: 700});
        $("#dynamicInfo").html("Close");
      }else{
        //animate it back in
        $("#hamburger").animate({left:'-205px'}, {queue: false, duration: 750});
        //hide any video when slideout goes away
        $(".video").css("visibility", "hidden");
      }
    });
  });
   
  //toggle function
  //once user clicks on a new video
  //this function checks to see which video is selected, then de-selects it
  var toggle = function(){
    if($('#video1').hasClass("selectedVideo")){
      // $('#video1').toggleClass("selected");
      $("#vid1").css("visibility", "hidden");
      $("#vid1").css("display", "none");
    }
    else if($('#video2').hasClass("selectedVideo")){
      $("#vid2").css("visibility", "hidden");
      $("#vid2").css("display", "none");
    }
    else if($('#video3').hasClass("selectedVideo")){
      $("#vid3").css("visibility", "hidden");
      $("#vid3").css("display", "none");
    }
    else if($('#video4').hasClass("selectedVideo")){
      $("#vid4").css("visibility", "hidden");
      $("#vid4").css("display", "none");
    }
    else if($('#video5').hasClass("selectedVideo")){
      $("#vid5").css("visibility", "hidden");
      $("#vid5").css("display", "none");
    }
    else if($('#video6').hasClass("selectedVideo")){
      $("#vid6").css("visibility", "hidden");
      $("#vid6").css("display", "none");
    }
};
  
  //brings up hidden MODAL when vid is selected
  //adds 'selected' class to current video playing
  $(function(){
    //when any video section is clicked
    //turn off all others
    $(".section").on("click", toggle);
    $("#video1").click(function(){
      $("#vid1").css("visibility", "visible");
      $("#vid1").css("display", "block");
      $("#vid1").addClass("selectedVideo");
    });
    $("#video2").click(function(){  
      $("#vid2").css("visibility", "visible");
      $("#vid2").css("display", "block");
      $("#vid2").addClass("selectedVideo");
    });
    $("#video3").click(function(){
      $("#vid3").css("visibility", "visible");
      $("#vid3").css("display", "block");
      $("#vid3").addClass("selectedVideo");
    });
    $("#video4").click(function(){
      $("#vid4").css("visibility", "visible");
      $("#vid4").css("display", "block");
      $("#vid4").addClass("selectedVideo");
    });
    $("#video5").click(function(){
      $("#vid5").css("visibility", "visible");
      $("#vid5").css("display", "block");
      $("#vid5").addClass("selectedVideo");
    });
    $("#video6").click(function(){
      $("#vid6").css("visibility", "visible");
      $("#vid6").css("display", "block");
      $("#vid6").addClass("selectedVideo");
    });
  });
  
  //dimension variables to be used below
  var bannerHeight = $('.banner_img_height').css("height");
  var windowHeight ;
  var windowWidth ;
  var modalHeight ;

  //make sure slideout and banner height are the same
  bannerHeight = $('#banner_img_small').css("height");
  $('#hamburger').css("height", bannerHeight);

  //keep slideout div in line with banner
  //when window is resized grab height of banner image
  $(window).on("resize", function() {
    //apply banner image height to slideout div
    bannerHeight = $('#banner_img_small').css("height");
    $('#hamburger').css("height", bannerHeight);
    // console.log(height);
  });

  //change modal height
  //when the right button is clicked
  $(".section").click(function(){
    //grab window height and width
    windowHeight = $(window).height();
    windowWidth = $(window).width();
    //apply new width and height to the modal
    $('.remodal').css("height", windowHeight - 100);
    $('.remodal').css("max-width", windowWidth - 20);
    $('.modalVideo').css("height", windowHeight / 2);
    $('.modalVideo').css("width", windowWidth - 40);
  });

  //Regular Expression for phone number input(s)
  //Prevents any character to be entered except numbers
  $("input[type='tel']").bind("keypress", function(event){
    //Regular Expression
    var regex = new RegExp("^[0-9]*$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
     
    //if the input doesn't pass the regular expression test
    if(!regex.test(key)){
      //prevent them from typing it
      event.preventDefault();
      return false;
    }
  });

  //stops and hides any videos playing when 'X' on Modal is clicked on
  //remove 'selected' class from any video playing
  $(".remodal-close").click(function(){
     $('#vid1')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*'); 
     $('#vid2')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*'); 
     $('#vid3')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*'); 
     $('#vid4')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*'); 
     $('#vid5')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*'); 
     $('#vid6')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');  
     $("#vid1").css("visibility", "hidden");
     $("#vid1").css("display", "none");
     $("#vid1").removeClass("selectedVideo");
     $("#vid2").css("visibility", "hidden");
     $("#vid2").css("display", "none");
     $("#vid2").removeClass("selectedVideo");
     $("#vid3").css("visibility", "hidden");
     $("#vid3").css("display", "none");
     $("#vid3").removeClass("selectedVideo");
     $("#vid4").css("visibility", "hidden");
     $("#vid4").css("display", "none");
     $("#vid4").removeClass("selectedVideo");
     $("#vid5").css("visibility", "hidden");
     $("#vid5").css("display", "none");
     $("#vid5").removeClass("selectedVideo");
     $("#vid6").css("visibility", "hidden");
     $("#vid6").css("display", "none");
     $("#vid6").removeClass("selectedVideo");
  });

  // //when form is submitted, play the video
  // $("#modalForm").submit(function(){
  //   $(".selectedVideo")[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}','*');
  //   // console.log("this has now been submitted");
  // });

  //if the user begins to scroll
  //my attempt to hide the discount button if scrolled to very bottom here
  $(window).scroll(function(){
    //collect how much has been scrolled
    var s = $(window).scrollTop();
    //collect total window height plus document height
    var  d = $(document).height();
    var  c = $(window).height();
    //calculate percent
    var scrollPercent = (s / (d-c)) * 100;
    //for dev purposes
    console.log(scrollPercent + "% " + s, d, c);

    //if user scrolled to bottom, hide discount button
    if(scrollPercent=100){
      $("#stickyBtn").removeClass("show");
      $("#stickyBtn").addClass("hide");
    }
    else{
      $("#stickyBtn").removeClass("hide");
      $("#stickyBtn").addClass("show");
    }
  });

});