$(document).ready(function () {

    /** scripts for adaptive **/
    var menuInfo = $('.info-menu .sub-menu');
    var phones = $('.phones .sub-menu');

    if ($(window).width() < '801'){
        $('.basket').prependTo($('.header-bottom .block-content'));
        menuInfo.prependTo($('.mobile-sub-menu'));
        phones.insertBefore($('.close-marker'));
    } else {
        $('.basket').insertAfter($('.form-search'));
        menuInfo.insertAfter($('.header-menu.info .title'));
        phones.insertAfter($('.phones .title'));
    }

    $(window).resize(function(){
        if ($(window).width() < '801'){
            $('.basket').prependTo($('.header-bottom .block-content'));
            menuInfo.prependTo($('.mobile-sub-menu'));
        } else {
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

    $('.catalog-menu .title').click(function() {
        if ($(window).width() < '801'){
            $(this).siblings('.sub-menu').slideToggle();
        }
    });

    $('.prints-title').click(function() {
        if ($(window).width() < '801'){
            $('nav').slideToggle(600);
        }
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