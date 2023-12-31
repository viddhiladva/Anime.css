$(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
        $('.navbar').addClass('sticky-top shadow-sm');
    } else {
        $('.navbar').removeClass('sticky-top shadow-sm');
    }
});

(function ($) {
    "use strict";

    // Index Page Loader
    var logoEl = document.querySelector('.logo-animation');
    var pathEls = document.querySelectorAll('.logo-animation path:not(.icon-curve)');
    var innerWidth = window.innerWidth;
    var maxWidth = 740;
    var logoScale = innerWidth <= maxWidth ? innerWidth / maxWidth : 1;
    var logoTimeline = anime.timeline();

    logoEl.style.transform = 'translateY(50px) scale(' + logoScale + ')';

    for (var i = 0; i < pathEls.length; i++) {
        var el = pathEls[i];
        el.setAttribute('stroke-dashoffset', anime.setDashoffset(el));
    }

    logoTimeline
        .add({
            targets: '.dot-e',
            translateX: [
                { value: -600, duration: 520, delay: 200, easing: 'easeInQuart' },
                { value: [-100, 0], duration: 500, delay: 1000, easing: 'easeOutQuart' }
            ],
            scale: [
                { value: [0, 1], duration: 200, easing: 'easeOutBack' },
                { value: 0, duration: 20, delay: 500, easing: 'easeInQuart' },
                { value: 1, duration: 200, delay: 1000, easing: 'easeOutQuart' },
                { value: 0, duration: 400, delay: 500, easing: 'easeInBack' }
            ],
            offset: 0
        })
        .add({
            targets: '.dot-i',
            translateY: { value: [-200, 0], duration: 500, elasticity: 400 },
            scale: [
                { value: [0, 1], duration: 100, easing: 'easeOutQuart' },
                { value: 0, duration: 400, delay: 1400, easing: 'easeInBack' }
            ],
            delay: 1200,
            offset: 0
        })
        .add({
            targets: '.fill.in',
            strokeDashoffset: {
                value: [anime.setDashoffset, 0],
                duration: 600,
                delay: function (el, i, t) { return 700 + (i * 100); },
                easing: 'easeOutQuart'
            },
            stroke: {
                value: ['#FFF', function (el) { return anime.getValue(el.parentNode, 'stroke') }],
                duration: 500,
                delay: 500,
                easing: 'easeInQuad'
            },
            opacity: {
                value: 0,
                duration: 1,
                delay: function (el, i, t) { return 1900 + (i * 80); },
            },
            offset: 0
        })
        .add({
            targets: '.fill.out',
            strokeDashoffset: [
                { value: [anime.setDashoffset, anime.setDashoffset], duration: 1890 },
                {
                    value: [0, anime.setDashoffset],
                    duration: 800,
                    delay: function (el, i) { return (i * 80); },
                    easing: 'easeInQuart'
                }
            ],
            offset: 0
        })
        .add({
            targets: '.line.out',
            strokeDashoffset: {
                value: [0, anime.setDashoffset],
                duration: 1200,
                delay: function (el, i, t) { return 2500 + (i * 100); },
                easing: 'easeInQuart'
            },
            strokeWidth: {
                value: [0, 2],
                delay: function (el, i, t) { return 2000 + (i * 100); },
                duration: 200,
                easing: 'linear'
            },
            offset: 0
        })
        .add({
            targets: '.icon',
            opacity: { value: 1, duration: 10, delay: 2800, easing: 'linear' },
            translateY: { value: 60, duration: 800 },
            delay: 4200,
            offset: 0
        })
        .add({
            targets: '.icon-line',
            strokeDashoffset: [
                { value: [anime.setDashoffset, anime.setDashoffset], duration: 3000 },
                { value: 0, duration: 1200, easing: 'easeInOutQuart' }
            ],
            strokeWidth: {
                value: [8, 2],
                delay: 3000,
                duration: 800,
                easing: 'easeInQuad'
            },
            stroke: {
                value: ['#FFF', function (el) { return anime.getValue(el, 'stroke') }],
                duration: 800,
                delay: 3400,
                easing: 'easeInQuad'
            },
            offset: 0
        })
        .add({
            targets: ['.icon-text path', '.icon-text polygon'],
            translateY: [50, 0],
            opacity: { value: [0, 1], duration: 100, easing: 'linear' },
            delay: function (el, i, t) { return 4200 + (i * 20); },
            offset: 0
        });


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Back to top button
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 300, 'linear');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });

})(jQuery);



function loaderFn() {
    const loaderInterval = setInterval(() => {
        if (parseFloat($('#logo-icon').css('transform').split(',')[5]) === 60) { //60
            setTimeout(() => {
                $('#loader').fadeOut('slow', function () {
                    $(this).hide();
                });
                $('body').css('overflow-y', 'scroll');
                $('.navbar').addClass('animate__animated animate__fadeInDown');
                $('.hero-header h1, .hero-header p, .hero-header a, .hero-header #myCanvas').addClass('animated zoomIn');
                window.scrollTo(0, 0);

            }, 700); //700
            clearInterval(loaderInterval);
        }
    }, 100);
}

// Spinner
function spinner() {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 500);
};