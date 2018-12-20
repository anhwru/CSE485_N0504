$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100)
        {
            $('.scrolltotop').fadeIn();
        }
        else
        {
            $('.scrolltotop').fadeOut();
        }
    });
    // cuộn khi click
    $('.scrolltotop').click(function () {
        $('html,body').animate({scrolltop:0})

    })
});