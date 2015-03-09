var numz;
numz = $(window).height();

$(window).scroll(function() {
                     if ($(this).scrollTop() > numz/14){
                     $('header').addClass("sticky");
                     $('.title').removeClass('hidden');
                     $('#top-header').hide();
                     }
                     else{
                     $('header').removeClass("sticky");
                     $('.title').addClass('hidden');
                     $('#top-header').show();
                     }
                     });