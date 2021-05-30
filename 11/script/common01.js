
$(document).ready(function(){
    
    function func1(){
        
        var num = 0;
        var result;
        setInterval(function(){
           result =num * -300;
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
    func1();
    
});