// menu code

$(document).ready(function() {
  $('.menu-button').on('click', function() {
    if($('.menu-button').hasClass('open')) {
      $(this).removeClass('open');
      $('header nav').removeClass('open');
      $('body').removeClass('open');
      $('.menu-overlay').fadeOut('fast');
     } else {
      $(this).addClass('open');
      $('header nav').addClass('open');
      $('body').addClass('open');
      $('.menu-overlay').fadeIn('fast');
    }
  }); 
  $('.menu-overlay').on('click', function() {
    $('.menu-button').removeClass('open');
    $('header nav').removeClass('open');
    $('body').removeClass('open');
    $('.menu-overlay').fadeOut('fast');
  })
});
