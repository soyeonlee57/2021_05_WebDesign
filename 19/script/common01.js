$(document).ready(function(){
   
    $(".menu > ul > li ").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(200);
    });
    $(".menu > ul > li ").mouseout(function(){
        $(this).find(".submenu").stop().slideUp(200);
    });
    
    
    $(".first").click(function(){
        $(".layer").show();
        $(".layer-bg").show();
    });
    $(".close-btn").click(function(){
        $(".layer").hide();
        $(".layer-bg").hide();
    });
    
    function slide(){
        
        var num = 0;
        
        setInterval(function(){
            
            if(num==3){
                num=0;
            }
            
            $(".slider p").hide();
            $(".slider p").eq(-num).stop().fadeOut();
            $(".slider p").eq(num).stop().fadeIn();
            
            
        },3000);
        
        }
        slide(); 
        
   
});