const reviewsSwiper = document.querySelector('.swiper-reviews');

//========================= SWIPER =========================//
if (reviewsSwiper) {
    const swiper = new Swiper('.swiper-reviews', {
        loop: true,
        autoheigth: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });
}