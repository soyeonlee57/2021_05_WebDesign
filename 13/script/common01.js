$(document).ready(function(){
   $(".menu> ul > li").mouseover(function(){
      $(".submenu").stop().slideDown(200);
   });
    $(".menu> ul > li").mouseout(function(){
      $(".submenu").stop().slideUp(200);
   });
    $(".tab1").click(function(){
        $(".notice").show();
        $(".gallery").hide();
    });
    $(".tab2").click(function(){
        $(".notice").hide();
        $(".gallery").show();
    });
    
    $(".notice").click(function(){
        $(".layer-bg").show();
        $(".layer").show();
    });
     $(".close-btn").click(function(){
        $(".layer-bg").hide();
        $(".layer").hide();
    });
    
    function img_slide(){
        
        var num =0;
        var result;
        setInterval(function(){
            
            result = num * -300;
            console.log(num);
            num++;
            console.log(result);
            
            if(num == 3){
                num = 0;
            }
            
            $(".slider").stop().animate({
                top : result + 'px'
            });
        }, 1000);
    }
    img_slide();
    
});