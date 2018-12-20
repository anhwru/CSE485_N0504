$(window).scroll(function () {
    var wintop = $(window).scrollTop(),
        docheight=$(document).height(),
        winheight=$(window).height();
    var scrolled =(wintop/(docheight-winheight))*102;
    $('.progress-bars').css('width',(scrolled + '%'))
});