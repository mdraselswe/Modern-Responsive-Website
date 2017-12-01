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
                    WORK
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