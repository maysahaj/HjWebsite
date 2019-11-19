$('.owl-carousel').owlCarousel({
    rtl: true,
    loop: true,
    margin: 10,
    items: 1,
    responsiveClass: true,
    nav: true,
    dots:true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        320: {
            items:1 
        },
        481: {
            items: 1
        },
        991: {
            items: 3
        },
        1025: {
            items: 3
        }
    }
});
