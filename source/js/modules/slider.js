const initSlider = () => {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            767: {
                slidesPerView: 2,
            },
        },
    });
};

export { initSlider };