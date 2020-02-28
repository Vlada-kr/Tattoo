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

  $('.price__menu li').on('click', function (e) {
    e.preventDefault();
    $(".price__menu li").removeClass('active');
    $(this).addClass('active');
  });
  $('.link').on('click', function (e) {
    e.preventDefault();
    $('.price__list').each(function () {
      $(this).css('display', 'none');
    });
    var block = $(this).attr('href');
    $(block).css('display', 'block');
  });

  $(".shop__item-rate").rateYo({
    starWidth: "15px",
    ratedFill: "#cf6161",
    rating: 4,
    readOnly: true
  });

  $('.shop__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<svg class="shop__slider-arrow shop__slirer-left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-alt-left" class="svg-inline--fa fa-long-arrow-alt-left fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"></path></svg>',
    nextArrow: '<svg class="shop__slider-arrow shop__slirer-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-alt-right" class="svg-inline--fa fa-long-arrow-alt-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path></svg>',
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true
        }
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });

  $('.clients__slider').slick({
    prevArrow: '<i class="fas fa-arrow-left clients__slider-arrow clients__slider-left"></i>',
    nextArrow: '<i class="fas fa-arrow-right clients__slider-arrow clients__slider-right"></i>',
    fade: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000
        }
      }
    ]
  });

  $('[data-fancybox]').fancybox({
    youtube: {
      controls: 0,
      showinfo: 0
    },
    vimeo: {
      color: 'f00'
    }
  });

  $('.blog__box').masonry({
    // options
    itemSelector: '.item',
    columnWidth: 380,
    fitWidth: true
  });



  $(document).ready(function () {
    $(".header").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 1800);
    });

  });


  var mixer = mixitup('.works__gallery');

  $('.works__list a').on('click', function () {
    $(".works__list a").removeClass('active');
    $(this).addClass('active');
  });
  
  var block_show = false;

  function scrollTracking() {
    if (block_show) {
      return false;
    }
    var wt = $(window).scrollTop();
    var wh = $(window).height();
    var et = $('.statistics__item-number').offset().top;
    var eh = $('.statistics__item-number').outerHeight();
    var dh = $(document).height();

    if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
      block_show = true;
      // Код анимации
      $('.statistics__item-number').each(function () {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
    }
  }
  $(window).scroll(function () {
    scrollTracking();
  });

  $(document).ready(function () {
    scrollTracking();
  });
});

