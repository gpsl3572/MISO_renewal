$(document).ready(function(){

   $(window).scroll(function(){

    sct = $(window).scrollTop();


    sec1_top = $('.section_1').offset().top;
    sec2_top = $('.section_2').offset().top;
    sec3_top = $('.section_3').offset().top;
    foot_top = $('footer').offset().top;

    if(sct >= sec1_top && sct < sec2_top - 300){
        $('.navi_con a > p').css({color: '#f0f0f0'});

        $('.navi_con1').hover(function(){
            $('.navi_con1').css({
                backgroundColor : ' rgba(255, 255, 255, 0.3)'});
        },function(){
            $('.navi_con1').css({backgroundColor : ' rgba(255, 255, 255, 0)'});
        });

        $('.navi_con2').hover(function(){
            $('.navi_con2').css({
                backgroundColor : ' rgba(255, 255, 255, 0.3)'});
        },function(){
            $('.navi_con2').css({backgroundColor : ' rgba(255, 255, 255, 0)'});
        });

        $('.navi_con3').hover(function(){
            $('.navi_con3').css({
                backgroundColor : ' rgba(255, 255, 255, 0.3)'});
        },function(){
            $('.navi_con3').css({backgroundColor : ' rgba(255, 255, 255, 0)'});
        });

    }else if( sct >= sec2_top && sct < foot_top ){
        $('.navi_con a > p').css({color: '#999'});
        
        $('.navi_con1').hover(function(){
            $('.navi_con1').css({
                backgroundColor : 'rgba(45, 168, 36, 0.8)'
            });
            $('.navi_con1 a > p').css({color: '#fff'});
        },function(){
            $('.navi_con1').css({backgroundColor : ' rgba(45, 168, 36, 0)'});
            $('.navi_con1 a > p').css({color: '#999'});
        });

        $('.navi_con2').hover(function(){
            $('.navi_con2').css({
                backgroundColor : 'rgba(45, 168, 36, 0.8)'
            });
            $('.navi_con2 a > p').css({color: '#fff'});
        },function(){
            $('.navi_con2').css({backgroundColor : ' rgba(45, 168, 36, 0)'});
            $('.navi_con2 a > p').css({color: '#999'});
        });

        $('.navi_con3').hover(function(){
            $('.navi_con3').css({
                backgroundColor : 'rgba(45, 168, 36, 0.8)'
            });
            $('.navi_con3 a > p').css({color: '#fff'});
        },function(){
            $('.navi_con3').css({backgroundColor : ' rgba(45, 168, 36, 0)'});
            $('.navi_con3 a > p').css({color: '#999'});
        });

    }



   }); 



// ready end
});