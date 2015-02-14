var numz;
numz = $(window).height();

$(window).scroll(function() {
                     if ($(this).scrollTop() > numz-10){
                     $('header').addClass("sticky");
                     }
                     else{
                     $('header').removeClass("sticky");
                     }
                     });