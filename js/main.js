
$(document).ready(function(){

    
    var slideLeng = $('.slide_box>div').length;
    // 슬라이드 갯수
    
    var slideWid = $('.slide_box>div').width()+100;
    // 각 슬라이드의 너비
    
    var totWid = slideLeng * slideWid;
    // 움직일 총 슬라이더의 너비
    
    $('.slide_box').width(totWid);
    // 슬라이더 총 너비값이 슬라이드 박스 너비 값이다 
    
    $('.slide_box>div').last().prependTo('.slide_box');
    // 마지막 슬라이드 맨 앞으로 보내고
    
    $('.slide_box').css('marginLeft', -slideWid);
    // 슬라이드 하나 너비만큼 움직여라
    
    // ----------------------------------------------------
    
    $('.right_arrow').on('click', function(){
        
        $('.slide_box').stop().animate({
            'left' : -slideWid
        },function(){
            $('.slide_box').css('left', 0).find('.slide_conwrap').first().appendTo('.slide_box');
            // $('slide_box>div').first().appendTo('.slide_box');
            
            // $('.slide_box').css({
            //     'left' : '' 
            // })
        })
    })
    
    $('.left_arrow').on('click',function(){
        $('.slide_box').stop().animate({
            'left' : slideWid
        },function(){

            $('.slide_box').css('left', 0 ).find('.slide_conwrap').last().prependTo('.slide_box');

            // $('slide_box>div').last().prependTo('.slide_box');
            
            // $('.slide_box').css({
            //     'left' : ''
            // })
        })
    })

// -----------------------------------------------------

$('.text2_2wrap_1').hover(function(){

    $('.circle_wrap1').css({
        display : 'block'
    });

},function(){

    $('.circle_wrap1').css({
        display : 'none'
    });

});

$('.text2_2wrap_2').hover(function(){

    $('.circle_wrap2').css({
        display : 'block'
    });

},function(){

    $('.circle_wrap2').css({
        display : 'none'
    });

});

$('.text2_2wrap_3').hover(function(){

    $('.circle_wrap3').css({
        display : 'block'
    });

},function(){

    $('.circle_wrap3').css({
        display : 'none'
    });

});

$('.text2_2wrap_4').hover(function(){

    $('.circle_wrap4').css({
        display : 'block'
    });

},function(){

    $('.circle_wrap4').css({
        display : 'none'
    });

});



});
