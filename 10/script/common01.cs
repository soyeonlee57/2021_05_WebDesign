$(document).ready(function(){
    
 $(".menu > ul > li").mouseover(function(){
    $(".menu > ul > li > ul").stop().slideDown(200);
 }); 
    $(".menu > ul > li").mouseout(function(){
    $(".menu > ul > li > ul").stop().slideUp(200);
 }); 
    
 $(".pop-up").click(function(){
    $(".layer").show();
    $(".layer-bg").show();
});    
 $(".close-btn").click(function(){
    $(".layer").hide();
    $(".layer-bg").hide();
});    
    
$(".tab1").click(function(){
    $(".notice").show();
    $(".gallery").hide();
});
$(".tab2").click(function(){
    $(".notice").hide();
    $(".gallery").show();
});
   
    
});