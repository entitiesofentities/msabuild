var main = function(){

  
    $('#welcome').addClass('animated fadeInDown');
    $('#grads').addClass('animated fadeInDown');
    
    switch(document.title){
            case "MSA 17 CFPs": $('#welcome').removeClass('hidden animated');
                        		$('#top-nav-one').addClass('');
            break;
            case "MSA 17 grads": $('#grads').removeClass('hidden animated');
            break;
    }
    
    var pad;
    pad = $('header').height();
    $('#padder').height(pad);
    
    $('.top-nav').hover(function(){
                        $(this).toggleClass('highlighted');
                        });
    
    $('#top-nav-one').click(function(){
                    $('#grads').addClass('hidden');
                    $('#welcome').addClass('animated');
                    $('#welcome').toggleClass('hidden', 'fadeInDown');
    });
    
    $('#top-nav-two').click(function(){
                       $('#welcome').addClass('hidden');
                       $('#grads').addClass('animated');
                       $('#grads').toggleClass('hidden', 'fadeInDown');
                       });
}

$(document).ready(main);