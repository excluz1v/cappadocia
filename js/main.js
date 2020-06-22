$(function () {
    $('.fairy-tail__slider, .our-trip__slider').slick({
        prevArrow: '<button type="button" class="slick-prev slick-btn"> <img src="images/arrow-left.svg" alt="" /></button>',
        nextArrow: '<button type="button" class="slick-next slick-btn"> <img src="images/arrow-right.svg" alt="" /></button>',
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        responsive: [
            {
                breakpoint: 601,
                settings: {
                    arrows: false
                }
            }
        ]
    });
})