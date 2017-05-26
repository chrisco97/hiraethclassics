// menu code

$(document).ready(function() {
  $('.menu-button').on('click', function() {
    if(!$('.menu-button').hasClass('open')) {
      $(this).addClass('open');
      $('header nav').addClass('open');
      $('body').addClass('open');
      $('.menu-overlay').fadeIn('fast');
     } else {
      $(this).removeClass('open');
      $('header nav').removeClass('open');
      $('body').removeClass('open');
      $('.menu-overlay').fadeOut('fast');
    }
  }); 
  $('.menu-overlay').on('click', function() {
    $('.menu-button').removeClass('open');
    $('header nav').removeClass('open');
    $('body').removeClass('open');
    $('.menu-overlay').fadeOut('fast');
  })
});
