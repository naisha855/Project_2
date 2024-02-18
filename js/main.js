
$(".nav_bars").click(function(){
    $("nav ul li").slideToggle();
    });
    $(window).resize(function(){
    var wWidth = $(window).width();
    if(wWidth > 400 && $("nav ul li").is(":hidden")){
    $("nav ul li").removeAttr("style");
    }
    });



var ct = 0;
var imgs = new Array("img/cook-2364221_1280.jpg", "img/banner2.jpg", "img/banner3.jpg")

setTimeout(progress, 3000);

function progress() {
    document.getElementById("slider_img").src = imgs[ct];
    ct++;
    setTimeout(progress, 3000);
    if (ct > 2) {
        ct = 0;
    }
};

$(function(){
    $('#reservation_click').click(function(){
        $('#modalwrap').fadeIn();
    });
    $('#reservation_close').click(function(){
        $('#modalwrap').fadeOut();
    });
});

$(function(){
    $('#reservation_click_2').click(function(){
        $('#modalwrap_2').fadeIn();
    });
    $('#reservation_close_2').click(function(){
        $('#modalwrap_2').fadeOut();
    });
});