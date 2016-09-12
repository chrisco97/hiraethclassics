$(document).ready(function(){
  $('.menu-button').on('click', function() {
    if($('.header-right ul').hasClass('menu')){
      $('.header-right ul').show();
      $('.header-right ul').removeClass('menu').addClass('close');
      $('.menu-button').html('<i class="fa fa-remove" aria-hidden="true"></i>')
    }
    else {
      $('.header-right ul').hide();
      $('.header-right ul').removeClass('close').addClass('menu');
      $('.menu-button').html('<i class="fa fa-bars" aria-hidden="true"></i>')
    }
  });
});