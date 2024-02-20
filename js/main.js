



$(function () {
    var ct = 0;
    var imgs = new Array("img/cook-2364221_1280.jpg", "img/banner2.jpg", "img/banner3.jpg")
    let slidebtn = document.querySelectorAll('.slider_pagenation_button');

    setTimeout(progress, 3000);

    function progress() {
        document.getElementById("slider_img").src = imgs[ct];
        for(let btn of slidebtn){
            btn.childNodes[0].style.backgroundColor='#fff';
        }
        slidebtn[ct].childNodes[0].style.backgroundColor='#f2D6A4';
        
        ct++;
        setTimeout(progress, 3000);
        if (ct > 2) {
            ct = 0;
        }
    };
});


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