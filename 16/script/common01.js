$(document).ready(function(){
    
    $(".menu > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(200);
    });
    $(".menu > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp(200);
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
        $(".tab2").removeClass("active");
        $(".tab1").addClass("active");
    });
    $(".tab2").click(function(){
        $(".tab2").addClass("active");
        $(".tab1").removeClass("active");
       $(".notice").hide();
        $(".gallery").show();
    });
    
    
    function slide(){
        
        var num = 0;
        var result;
        
        setInterval(function(){
            result = num *-800;
            num++;
            console.log(result);
            if(num == 3){
                num = 0;
            }
            
            $(".slider").stop().animate({
                left : result + 'px'
            });
        },3000);
    }
    slide();
})