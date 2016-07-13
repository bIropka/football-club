$(document).ready(function () {

    /** scripts for adaptive **/
    var menuInfo = $('.info-menu .sub-menu');
    var phones = $('.phones .sub-menu');
    var email = $('.footer-bottom .our-email');

    if ($(window).width() < '801'){
        $('.basket').prependTo($('.header-bottom .block-content'));
        menuInfo.prependTo($('.mobile-sub-menu'));
        phones.insertBefore($('.close-marker'));
        $('nav').css('display', 'none');
        $('.catalog-menu').css('display', 'none');
    } else {
        $('.basket').insertAfter($('.form-search'));
        menuInfo.insertAfter($('.info-menu .title'));
        phones.insertAfter($('.phones .title'));
        $('nav').css('display', 'block');
        $('.catalog-menu').css('display', 'inline-block');
    }

    $(window).resize(function(){
        if ($(window).width() < '801'){
            $('.basket').prependTo($('.header-bottom .block-content'));
            menuInfo.prependTo($('.mobile-sub-menu'));
            phones.insertBefore($('.close-marker'));
            $('nav').css('display', 'none');
            $('.catalog-menu').css('display', 'none');
        } else {
            $('.basket').insertAfter($('.form-search'));
            menuInfo.insertAfter($('.info-menu .title'));
            phones.insertAfter($('.phones .title'));
            $('nav').css('display', 'block');
            $('.catalog-menu').css('display', 'inline-block');
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
        var titles = $('.catalog-menu .title');

        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).siblings('.sub-menu').slideUp();
            $(this).parent().removeClass('active');
        } else {
            titles.siblings('.sub-menu').slideUp();
            titles.removeClass('active');
            titles.parent().removeClass('active');
            $(this).addClass('active');
            $(this).siblings('.sub-menu').slideDown();
            $(this).parent().addClass('active');
        }

    });

    $('.phones .title').click(function() {
        $(this).siblings('.sub-menu').slideToggle();
        $(this).parent().toggleClass('active');
    });

    $('.info-menu .title').click(function() {
        $(this).siblings('.sub-menu').slideToggle();
        $(this).parent().toggleClass('active');
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