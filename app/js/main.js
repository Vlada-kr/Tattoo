$(function(){
    $('.header__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.header__menu-text').on('click',function(){
        $('.header__menu-list').slideToggle();
    })
});