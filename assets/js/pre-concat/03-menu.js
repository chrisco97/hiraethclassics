// menu code

$(document).ready(function() {
  $('.menu-button').on('click', function() {
    if(!$('.menu-button').hasClass('open')) {
      $('.menu-button, header nav, body').addClass('open');
      $('.menu-overlay').fadeIn('fast');
     } else {
      $('.menu-button, header nav, body').removeClass('open');
      $('.menu-overlay').fadeOut('fast');
    }
  }); 
  $('.menu-overlay').on('click', function() {
    $('.menu-button, header nav, body').removeClass('open');
    $('.menu-overlay').fadeOut('fast');
  })
});
