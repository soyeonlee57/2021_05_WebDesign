$(document).ready(function(){
    $(".menu > ul > li").hover(
    function(){
     $(this).find(".submenu").stop().slideDown(200);
    },
    function(){
        $(this).find(".submenu").stop().slideUp(200);
    }    
    )
});