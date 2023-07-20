const initIntroSlider = () => {
    const swiper = new Swiper('.intro__swiper', {
        // Optional parameters
        loop: true,
        speed: 2000,
        slidesPerView: 1,
        autoplay: {
            delay: 5000,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
};

export { initIntroSlider };