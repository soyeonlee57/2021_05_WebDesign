$(document).ready(function(){
   
    $(".menu > ul > li").mouseover(function(){
       $(this).find(".submenu") .stop().slideDown(200);
    });
    $(".menu > ul > li").mouseout(function(){
       $(".menu > ul > li > ul").stop().slideUp(200);
    });
    
    $(".notice").click(function(){
       $(".layer").show(); 
    });
    
    $(".close-btn").click(function(){
       $(".layer").hide(); 
    });
    
    $(".tab1").click(function(){
        $(".notice").show();
        $(".gallery").hide();
    });
    
    $(".tab2").click(function(){
        $(".notice").hide();
        $(".gallery").show();
    });
    
    function img_slide(){
        
        var num = 0;
        
        setInterval(function(){
            
            if(num==3){
                num=0;
            }
            
             $(".slider p").hide();
             $(".slider p").eq(-num).stop().fadeOut();
             $(".slider p").eq(num).stop().fadeIn();
             console.log(num);
             num++
            
        },1000);
        
       
    }
    
    img_slide();
});