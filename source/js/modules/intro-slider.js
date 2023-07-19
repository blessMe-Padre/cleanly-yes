const initIntroSlider = () => {
    const swiper = new Swiper('.intro__swiper', {
        // Optional parameters
        loop: true,
        slidesPerView: 1,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });
};

export { initIntroSlider };