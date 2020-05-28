$(document).ready(function () {
    $(".navbar-light .navbar-nav .nav-link").click(function(){
        $("body,html").animate({scrollTop:$('#'+$(this).data('value')).offset().top},1500);
    });
    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        if (scroll > 500) {
            $(".move").show(500)
        } else {
            $(".move").hide(500)
        }
    });
    $(".move").click(function () {
        $("body,html").animate({
            scrollTop: 0
        }, 1000)
    });
    $("body").niceScroll({
  cursorcolor:"#5f1782",
  cursorwidth:"10px"    
});
});
