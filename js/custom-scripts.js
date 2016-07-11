$(document).ready(function () {

    /** scripts for adaptive **/
    var menuInfo = $('.info-menu');
    var allNumbers = $('.all-numbers');

    if ($(window).width() < '801'){
        $('.basket').prependTo($('.header-bottom .block-content'));
        menuInfo.prependTo($('.mobile-sub-menu'));
        allNumbers.appendTo($('.mobile-sub-menu'));
    } else {
        $('.basket').insertAfter($('.form-search'));
        menuInfo.insertAfter($('.header-menu.info .title'));
        allNumbers.insertAfter($('.phones .title'));
    }

    $(window).resize(function(){
        if ($(window).width() < '801'){
            $('.basket').prependTo($('.header-bottom .block-content'));
            menuInfo.prependTo($('.mobile-sub-menu'));
        } else {
            $('.mobile-sub-menu').removeClass('active');
            $('.basket').insertAfter($('.form-search'));
            menuInfo.insertAfter($('.header-menu.info .title'));
        }
    });

    $('.mobile-menu').click(function() {
        $('.mobile-sub-menu').addClass('active');
    });

    $('.close-marker').click(function() {
        $('.mobile-sub-menu').removeClass('active');
    });

    $('.mobile-catalog').click(function() {
        $('.catalog-menu').slideToggle();
    });

    /** end of scripts for adaptive **/

    /** scripts for sliders **/

    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        pauseOnDotsHover: true
    });

    /** end of scripts for sliders **/

});