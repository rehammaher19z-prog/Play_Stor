//slider

const swiper = new Swiper(".slide-swap", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },


    autoplay: {
        delay: 2500,
    },

});


// slider_products slide



const swiper2 = new Swiper(".slide_product", {

    slidesPerView: 5,
    spaceBetween: 20,

    navigation: {
        nextEl: ".slide_product .swiper-button-next",
        prevEl: ".slide_product .swiper-button-prev",
    },

    autoplay: {
        delay: 2500,
    },

    breakpoints: {

        /* من 801px وأكبر */
        2000: {
            slidesPerView: 5,
            spaceBetween: 20
        },

        1200: {
            slidesPerView: 4,
            spaceBetween: 15
        },

        /* من 601px إلى 800px */
        601: {
            slidesPerView: 3,
            spaceBetween: 15
        },

        /* من 0px إلى 600px */
        0: {
            slidesPerView: 1,
            spaceBetween: 5
        }

    }

});




