/* ============================= 
                Preloader
================================ */
$(window).on('load', function () { // Makes sure whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/* ============================= 
                Team
================================ */
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left arrow-40"></i>','<i class="fa fa-angle-right arrow-40"></i>'],
        responsive: {
                // Breakpoint from 0 up
            0: {
                    items: 1
            },
                // Breakpoint from 480 up
                480: {
                    items: 2
            }
        }
    });
});

/* ============================= 
        Progress Bars
================================ */
$(function () {

    $("#progress-elements").waypoint(function () {

        $(".progress-bar").each(function () {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"

            }, 2000);
        });

        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });

});
/* ============================= 
          Responsive Tabs
================================ */
$(function () {

    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });

});
/* ============================= 
           Portfolio
================================ */
$(window).on('load', function () {
        // Intialize Isotope
        $("#isotope-container").isotope({
        });

        // Filter Items On Button Click
        $("#isotope-filters").on('click', 'button', function() {

            // Get Filter Value
            var filterValue = $(this).attr('data-filter');

            // Filter Portfolio Items
            $("#isotope-container").isotope({
                filter: filterValue
        });

        // Active Button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});
/* ============================= 
          Magnifier
================================ */
$(function () {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // Child Items Selector, By Clicking On It Popup Will Open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
/* ============================= 
          Testimonials
================================ */
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left arrow-40"></i>',
            '<i class="fa fa-angle-right arrow-40"></i>'
        ]
    });
});
/* ============================= 
            Stats
================================ */
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    })
});
/* ============================= 
            Clients
================================ */
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left arrow-40"></i>',
            '<i class="fa fa-angle-right arrow-40"></i>'],
        responsive: {
                // Breakpoint from 0 up
            0: {
                    items: 2
            },
                // Breakpoint from 480 up
                480: {
                    items: 3
            },
                // Breakpoint from 768 up
                768: {
                    items: 6
            }    
        }
     
    });
});
/* ============================= 
            Google Map
================================ */
$(window).on('load', function () {
    //MAP VARIABLES
    var addressString = '230 Broadway, NY, New York 10007, USA';
    var myLatlng = {lat: 40.712685, lng: -74.005920};
    //RENDER MAP
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatlng
    });
    //ADD MARKER
    var marker = new google.maps.Marker ({
        position: myLatlng,
        map: map
    });
    //ADD INFO WINDOW
    var infowindow = new google.maps.InfoWindow ({
        content: addressString
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker)
    });
});
/* ============================= 
            Navigation
================================ */

/*Show & Hide White Navigation */
$(function () {

    showHideNav();

    $(window).scroll(function(){

        //Show/hide nav on window's scroll
        showHideNav();
    });

    function showHideNav() {

        if( $(window).scrollTop() > 50 ) {

            //Show white nav
            $("nav").addClass("white-nav-top");

            //Show dark logo
            $(".navbar-brand img").attr("src", "img/solo-images/logo/logo-dark.png");

            //Show back to top button
            $("#back-to-top").fadeIn();

        } else {

            //Hide white nav
            $("nav").removeClass("white-nav-top");

            //Show logo
            $(".navbar-brand img").attr("src", "img/solo-images/logo/logo.png");

            //Hide back to top button
            $("#back-to-top").fadeOut();
        }
    }
});

//Smooth Scrolling
$(function () {

    $("a.smooth-scroll").click(function(event) {

        event.preventDefault();

        //Get Section ID like #about, #services, #work, #team, and etc.
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top
        }, 1250, "easeInOutExpo");

    });

});
/* ============================= 
            Mobile Menu
================================ */
$(function () {

    //Show Mobile Nav
    $("#mobile-nav-open-btn").click(function() {
        $("#mobile-nav").css("height","100%");
    });

    //Hide Mobile Nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function() {
        $("#mobile-nav").css("height","0%");
    });

});

/* ============================= 
            Animation
================================ */

//Animate on scroll
$(function () {

    new WOW().init();

});
//home animation on page load
$(window).on('load', function () {
    
    $("#home-heading-1").addClass("animated fadeInOut");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");
});