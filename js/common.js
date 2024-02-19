$(".nav_bars").click(function () {
    $("nav").slideToggle();
});


$(window).resize(function () {
    var wWidth = $(window).width();
    if (wWidth > 400 && $("nav ul li").is(":hidden")) {
        $("nav ul li").removeAttr("style");
    }
});

