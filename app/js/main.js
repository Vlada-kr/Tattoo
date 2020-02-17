$(function () {
    $('.header__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.header__menu-text').on('click', function () {
        $('.header__menu-list').slideToggle();
    });


    $('.about__slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.about__slider-nav'
    });
    $('.about__slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.about__slider-for',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });

});