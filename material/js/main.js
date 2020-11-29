$(document).ready(function(){
     $('.menu-button, .menu-text').on('click', function(){
        $('.bar').toggleClass('bar_activate');
        $('.menu').toggleClass('menu_shadow');
        $('.menu-text').toggleClass('menu-text_light');
   })
      $('.user-button, .user-text').on('click', function(){
         $('.user-bar').toggleClass('user-bar_activate');
         $('.user').toggleClass('user_shadow');
         $('.user-text').toggleClass('user-text_light');
   })








    
 
 });