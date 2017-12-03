/*=================================================
                    SERVICES
===================================================*/
$(function () {

    // animate on Scroll
    new WOW().init();
});
/*=================================================
                    WORK
===================================================*/
$(function () {

    $('.container-fluid').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }

    });
});

/*=================================================
                    TEAM
===================================================*/
$(function () {

    $("#team-member").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });

});

/*=================================================
                    TESTIMONIALS
===================================================*/
$(function () {

    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });

});
/*=================================================
                    COUNTER
===================================================*/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

});

/*=================================================
                    CLIENT
===================================================*/
$(function () {

    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });

});