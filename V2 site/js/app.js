$(document).ready(function() {
  $('#want-a-discount--button').on('click', function () {
    $('#want-a-discount--form').addClass('is-visible')
    $('.bloco-destaque').toggleClass('is-visible')
  });

  $('.banner').slick({
    cssEase:ease,
    dots:true,
    lazyLoad:ondemand
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