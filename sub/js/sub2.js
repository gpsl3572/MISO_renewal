$(document).ready(function(){
    
    
    $('.text_2').click(function(){
       
        $('.img_1').css({
            display:'none'
        });
        
        $('.img_3').css({
            display:'none'
        });
        
        $('.img_4').css({
            display:'none'
        });
        
        $('.img_2').css({
            display:'block'
        });
        
    });
    
    $('.text_3').click(function(){
       
        $('.img_1').css({
            display:'none'
        });
        
        $('.img_2').css({
            display:'none'
        });
        
        $('.img_4').css({
            display:'none'
        });
        
        $('.img_3').css({
            display:'block'
        });

        // $(this).css({
        //     backgroundColor: 'rgba(133,192,13,0.3)'
        // });
        
    });
    
    $('.text_4').click(function(){
       
        $('.img_1').css({
            display:'none'
        });
        
        $('.img_2').css({
            display:'none'
        });
        
        $('.img_3').css({
            display:'none'
        });
        
        $('.img_4').css({
            display:'block'
        });
        
    });
    
    $('.text_1').click(function(){
       
        $('.img_1').css({
            display:'block'
        });
        
        $('.img_2').css({
            display:'none'
        });
        
        $('.img_3').css({
            display:'none'
        });
        
        $('.img_4').css({
            display:'none'
        });
        
    });
    
    
    
    
    $('.text_sticky> p').each(function(index){
        $(this).attr('data-index',index);
    }).click(function(){

        var i = $(this).attr('data-index');

        $('.text_sticky> p[data-index != '+ i +']').removeClass('active');

        $('.text_sticky> p[data-index = '+ i +']').addClass('active');

    });









    
    
    
    
    
    
    
    
    
});//end