//preloader
$(window).on('load', function () {
    $preloader = $('.preloader'),
    setTimeout(function () {
        $preloader.delay(350).fadeOut('slow');
        $('.main-block__title,.main-block__text').addClass('fadeInUp');
    }, 600);

});

$(document).ready(function() {
    // one page scroll
    $(function(){
        var sections = $('.section'),
            display = $('.main-content'),
            mainMenu = $('.menu'),
            inScroll = false;

        var scrollToSection = function (sectionEq) {
            var position = 0;
            if (!inScroll){
                inScroll = true;
                position = (sections.eq(sectionEq).index() * -100) +'%';
                sections.eq(sectionEq).addClass('active').siblings().removeClass('active');
                display.css({
                    'transform': 'translate3d(0,' + position + ',0)'
                });
                if(sections.filter('.main').hasClass('active')){
                    mainMenu.addClass('active slideInLeft');
                    console.log('asd');
                } else {
                    mainMenu.removeClass('active slideInLeft');
                }
                setTimeout(function () {
                    inScroll = false;
                }, 1300);
            }
        };
        $('.wrapper').on('wheel', function (e) {
            var deltaY = e.originalEvent.deltaY,
                activeSection = sections.filter('.active'),
                nextSection = activeSection.next(),
                prevSection = activeSection.prev();



            if (deltaY > 0){ // скролл вниз
                if (nextSection.length) {
                    scrollToSection(nextSection.index());
                    var animateElem = nextSection.find('[data-animated]');
                    animateElem.each(function () {
                       $(this).addClass($(this).attr('data-animated'));
                    });
                }
            }

            if (deltaY < 0 ){ // скролл вверх
                if (prevSection.length) {
                    scrollToSection(prevSection.index());
                    prevSection.find('[data-animated]').addClass('animated');

                }
            }
        });
        $(document).on('keydown', function (e) {
            var activeSection = sections.filter('.active'),
                nextSection = activeSection.next(),
                prevSection = activeSection.prev();
            switch (e.keyCode) {
                case 40 :
                    if (nextSection.length) {
                        scrollToSection(nextSection.index());
                    }
                    break;
                case 38 :
                    if (prevSection.length) {
                        scrollToSection(prevSection.index());
                    }
                    break;
            }
        })
    });

    // табы без анимации
    (function($) {
        $(function() {
            $('.tabs__caption').on('click', '[data-tab-link]:not(.active)', function() {
                $(this)
                    .addClass('active').siblings().removeClass('active')
                    .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
                return false;
            });
        });
    })(jQuery);

    // табы с анимацией
    (function($) {
        $(function() {
            $('.tabs__caption--animate').on('click', '[data-tab-link]:not(.active)', function() {
                $(this)
                    .addClass('active').siblings().removeClass('active')
                    .closest('div.tabs').find('div.tabs__content').removeClass('active fadeInRight').eq($(this).index()).addClass('active fadeInRight');
                return false;
            });
        });
    })(jQuery);
    // клики

    $(document).on('click', '.nav-item-first-arrow', function () {
        $(this).parents('.nav-item').find('.nav-item-first').toggleClass('active');
        $(this).parents('.nav-item').find('.nav-item-second').slideToggle();
        var elements = $(this).parents('.nav-item').siblings('.nav-item');
        elements.each(function () {
            $(this).find('.nav-item-first.active + .nav-item-second').slideToggle();
            $(this).find('.nav-item-first.active').removeClass('active');
        });
        return false;
    });
    $(document).on('click', '.main-contacts-but', function () {
        $('.main-contacts').removeClass('fadeOutRight');
        $('.main-contacts').addClass('fadeInRight');
        $('.main-contacts').addClass('active');
        return false;
    });
    $(document).on('click', '.main-contacts-close', function () {
        $('.main-contacts').removeClass('fadeInRight');
        $('.main-contacts').addClass('fadeOutRight');
        return false;
    });
    $(document).on('click', '.menu-but-open', function () {
        $(this).parents('.menu').toggleClass('active slideInLeft');
        return false;
    });
    $(document).mouseup(function (e){
        var div = $(".menu");
        if (!div.is(e.target)
            && div.has(e.target).length === 0
            && !$('.main').hasClass('active')) {
            div.removeClass('active');
        }
    });

    // слайдеры
    (function mestoSlider(){
        var mestoSlider = $('.mesto-slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1
        });
        $(document).on('click', '.mesto-slider-buttons-but--prev', function () {
            mestoSlider.slick('slickPrev');
            return false;
        });
        $(document).on('click', '.mesto-slider-buttons-but--next', function () {
            mestoSlider.slick('slickNext');
            return false;
        });
    })();
    (function bigSlider(){
        var bigSlider = $('.big-slider-main').slick({
            infinite: true,
            dots:true,
            appendDots: $('.big-slider-pagination'),
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $(document).on('click', '.big-slider--prev', function () {
            bigSlider.slick('slickPrev');
            return false;
        });
        $(document).on('click', '.big-slider--next', function () {
            bigSlider.slick('slickNext');
            return false;
        });

    })();
    (function bgSliderMain(){
        var bgSlider = $('.bg-slider').slick({
            infinite: true,
            dots:false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            fade: true,
            cssEase: 'linear'
        });
    })();

    // яндекс карты
    var myMap,
        myMap1;
    ymaps.ready(init);
    function init () {
        myMap = new ymaps.Map("yandexmap", {
            center: [55.76, 37.64],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        });
        myMap1 = new ymaps.Map("yandexmap1", {
            center: [55.76, 37.64],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        });
    }
});





