$(document).ready(function(){
   $(".menu> ul > li").hover(
     function(){
         $(".submenu").stop().slideDown(200);
         $(".menu-bg").stop().slideDown(200);
     },
       function(){
         $(".submenu").stop().slideUp(200);
         $(".menu-bg").stop().slideUp(200);
     },
   ) 
});