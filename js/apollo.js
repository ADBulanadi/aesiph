$(document).ready(function(){

    $mobile_menu = $('.open');

    $(this).scrollTop(0);

    // $('.open').hide();

    $('.carousel').carousel({
        interval: 3000
    });
    AOS.init();

    $('.btTop').hide();
    // $mobile_menu.hide();

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 180) {
            // $(".navbar-right").hide();
            // $('.open').show();
            $('.btTop').show();
        } else {
            // $(".navbar-right").show();
            // $('.open').hide();
            $('.btTop').hide();
        }

        if (scroll > 300) {
            $('.btTop').show();
        } else {
            $('.btTop').hide();
        }
    });

    if (window.matchMedia('(min-width: 992px)').matches) {
        $('.open').hide();
        /*$('.apollo-vector').show();
        $('.mobile-apollo-vector').hide();*/
    } else if (window.matchMedia('(max-width: 768px)').matches) {
        $('.open').show();
        /*$('.apollo-vector').hide();
        $('.mobile-apollo-vector').show();*/
    }
});

$('.btTop').click(function() {
    $('html, body').animate({scrollTop: 0},1000);
});