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

        $('.mobile-sub-menu').removeClass('active');
        $('.catalog-menu').slideToggle();

        if ($(window).width() < '801'){
            $('nav').slideUp(600);
        }

    });

    $('.top-menu .title').hover(
        function() {
            $(this).parent().addClass('active');
        },
        function() {
            $(this).parent().removeClass('active');
        }
    );

    $('.top-menu .title').click(function() {

        var titles = $('.top-menu .title');
        $('.mobile-sub-menu').removeClass('active');

        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).siblings('.sub-menu').slideUp();
        } else {
            titles.siblings('.sub-menu').slideUp();
            titles.removeClass('active');
            $(this).addClass('active');
            $(this).siblings('.sub-menu').slideDown();
        }

    });

    $('.prints-title').click(function() {
        if ($(window).width() < '801'){
            $('.mobile-sub-menu').removeClass('active');
            $('.catalog-menu').slideUp();
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

    $('.product-slider').slick({
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '.left-control',
        nextArrow: '.right-control'
    });

    /** end of scripts for sliders **/

    /** script for size-chooser **/

        $('.size-chooser ul li').click(function() {
            if (!$(this).hasClass('active') && !$(this).hasClass('link-item')) {
                $('.size-chooser ul .active').removeClass('active');
                $(this).toggleClass('active');
                $('#size-chooser').val($(this).html());
            }
        });

    /** end of script for size-chooser **/

    /** script for color-chooser **/

        $('.color-chooser ul li').click(function() {
            if (!$(this).hasClass('active')) {
                $('.color-chooser ul .active').removeClass('active');
                $(this).toggleClass('active');
                $('#color-chooser').val(getFirstClassName(this));
            }
        });

        function getFirstClassName(item) {
            var array = item.className.split(' ');
            return array[0];
        }

    /** end of script for color-chooser **/

    /** script for product-sliders **/

        $('.product-slider-menu li').click(function() {

            if (!$(this).hasClass('active')) {

                $('.product-slider-menu .active').removeClass('active');
                $(this).toggleClass('active');

                $('.product-slider-wrapper').removeClass('active');

                switch(getFirstClassName(this)) {
                    case 'item-for-men':
                        $('.product-slider-for-men').addClass('active');
                        $('.product-slider').slick('slickGoTo', 0);
                        break;
                    case 'item-for-women':
                        $('.product-slider-for-women').addClass('active');
                        $('.product-slider').slick('slickGoTo', 0);
                        break;
                    case 'item-for-children':
                        $('.product-slider-for-children').addClass('active');
                        $('.product-slider').slick('slickGoTo', 0);
                        break;
                }
            }
        });

    /** end of script for product-sliders **/

    /** script for menu-bottom **/

        $('.bottom-menu li').click(function() {

            if (!$(this).hasClass('active')) {

                $('.bottom-menu .active').removeClass('active');
                $(this).toggleClass('active');

                $('.bottom-menu-item').removeClass('active');

                switch(getFirstClassName(this)) {
                    case 'item-analogs':
                        $('.analogs').addClass('active');
                        break;
                    case 'item-shipping-payment':
                        $('.shipping-payment').addClass('active');
                        break;
                    case 'item-about-product':
                        $('.about-product').addClass('active');
                        break;
                    case 'item-product-reviews':
                        $('.product-reviews').addClass('active');
                        break;
                }
            }
        });

    /** end of script for menu-bottom **/

});