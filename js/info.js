
$(function () {
     $('.best_swichi_button').click(function () {
        let idx = $(this).index();

        $(this).addClass('one');
        $(this).siblings().removeClass('one');

        $('.best_list').eq(idx).fadeIn().css('display', 'flex');
        $('.best_list').eq(idx).siblings('.best_list').hide();
    })
});

