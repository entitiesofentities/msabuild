    var main = function(){
        
            $('h3').each(function(){
                         $(this).nextUntil('h3').andSelf().wrapAll('<div class="test"/>');
                         });
            
            $('h3').addClass('reader_title');
            $('#reader p').addClass('reader_description');
            $('.reader_description').hide();
        
            //code for closed seminars
        $('h3:contains("CLOSED")').addClass('greyout');
        $('h3:contains("CLOSED")').nextUntil('h3').andSelf().addClass('greyout');
        $('h3:contains("FULL")').addClass('greyout');
            $('h3:contains("FULL")').nextUntil('h3').andSelf().addClass('greyout');
            //seminars are now closed
        if(document.title == "MSA 17 Seminars"){
        $('h3').nextUntil('h3').andSelf().addClass('greyout');
        }
            $('h3').click(function(){
                          $(this).toggleClass('selected');
                          });
            
            $('.test').click(function(){
                             $(this).children('p').toggle();
                             });
        
        $('h3').first().click(function(){
                      $('.test p').each(function(){
                                        $(this).toggle();
                                        });
                      });
}

$(document).ready(main);