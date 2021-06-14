$(document).ready(function(){
   
    $(".menu > ul > li").mouseover(function(){
        $(".submenu").stop().slideDown(200);
    });
    $(".menu > ul > li").mouseout(function(){
        $(".submenu").stop().slideUp(200);
    });
    
    $(".first").click(function(){
        $(".layer").show();
    });
    $(".close-btn").click(function(){
        $(".layer").hide();
    });
    
    $(".tab1").click(function(){
        $(".notice").show();
        $(".gallery").hide();
        $(".tab1").addClass("active");
        $(".tab2").removeClass("active");
    });
    $(".tab2").click(function(){
        $(".notice").hide();
        $(".gallery").show();
        $(".tab1").removeClass("active");
        $(".tab2").addClass("active");
    });
    
    function slide(){
        
        var num = 0;
        var result;
        
        setInterval(function(){
            
            result= num * -350;
            num++;
            console.log(result);
            
            if(num==3){
                num=0;
            }
            
            $(".slider").stop().animate({
                top:result+'px'
            });
            
            
        },3000);
        
    }
    slide();
    
    
});