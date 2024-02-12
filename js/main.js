src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.6.0.min.js"


$(".nav_bars").click(function(){
    $(".menu").slideToggle();
    });
    $(window).resize(function(){
    var wWidth = $(window).width();
    if(wWidth > 400 && $(".menu").is(":hidden")){
    $(".menu").removeAttr("style");
    }
    });



var ct=0;
var imgs= new Array("img/cook-2364221_1280.jpg", "img/banner2.jpg", "img/banner3.jpg")

setTimeout(progress, 1000);

function progress(){
document.images[1].src=imgs[ct];
ct++;
setTimeout(progress, 5000);
if(ct>2){
    ct=0;
}
};

