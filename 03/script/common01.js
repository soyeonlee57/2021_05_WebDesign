$(document).ready(function () {

    $(".menu > ul > li").mouseover(function () {
        $(this).find(".submenu").stop().slideDown(200);
    });

    $(".menu > ul > li").mouseout(function () {
        $(this).find(".submenu").stop().slideUp(200);
    });

});
