$(document).ready(function () {
    $(".tab1").click(function(){
       $(".notice").show();
       $(".gallery").hide(); 
    });
   $(".tab2").click(function(){
       $(".notice").hide();
       $(".gallery").show(); 
    });
});
