$(document).ready(function(){


    $(window).scroll(function(){

        mainSct = $(window).scrollTop();

        if(mainSct >= 300){
            $('header').addClass('head');
        }else if(mainSct <= 300 ){
            $('header').removeClass('head');
        }

    });






});