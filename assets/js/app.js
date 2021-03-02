// category carousel
$('.category-carousel').owlCarousel({
    loop: true,
    margin: 25,
    nav: true,
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 3
        },
        992: {
            items: 4
        }
    },
    navText: [
        '<i class="fal fa-angle-left"></i>',
        '<i class="fal fa-angle-right"></i>',
    ],
})


// product carousel
$('.product-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 2
        },
        992: {
            items: 3
        }
    },
    navContainer: ".product-card-nav",
    navText: [
        '<i class="fal fa-angle-left"></i>',
        '<i class="fal fa-angle-right"></i>',
    ],
})