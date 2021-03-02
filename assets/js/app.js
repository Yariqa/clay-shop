// category carousel
$('.category-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
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
    }
})


// product carousel
$('.product-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive: {
        0: {
            items: 2
        },
        992: {
            items: 3
        }
    }
})