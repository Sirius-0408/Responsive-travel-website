var newtop = $('.color666').offset().top;
$(window).scroll(function(){
    if($(document).scrollTop() >= newtop ){
        $('.back').fadeIn();
      }else{
         $('.back').fadeOut();
      };
});
$('.back').click(function(){
    //给html和body元素做动画
    $('body,html').stop().animate({
      scrollTop:0
    })
  })