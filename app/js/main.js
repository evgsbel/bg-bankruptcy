let arrow_left = "<svg width='16' height='15' viewBox='0 0 16 15' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M14.5 7.40234H1M1 7.40234L7 1.40234M1 7.40234L7 13.4023' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>",
    arrow_right = "<svg width='16' height='15' viewBox='0 0 16 15' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0.999999 7.40234L14.5 7.40234M14.5 7.40234L8.5 13.4023M14.5 7.40234L8.5 1.40234'  stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>";

$('.video__slider-js').owlCarousel({
    dots: false,
    nav:true,
    navText: [arrow_left, arrow_right],
    navClass: ["slider-arrow slider-arrow_prev", "slider-arrow slider-arrow_next"],
    navContainerClass: 'slider-arrow__wrapper',
    margin: 30,
    responsive:{
        0:{
            items:1,
            margin: 0
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

$('.top-form__next-js').click(function () {
    event.preventDefault();
    $('.top-form__first').hide();
    $('.top-form__second').show();
});
$('.top-form__back-js').click(function () {
    event.preventDefault();
    $('.top-form__second').hide();
    $('.top-form__first').show();
});