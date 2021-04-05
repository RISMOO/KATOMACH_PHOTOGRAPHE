/*-----------------------------------------------------------------
[Legal Notice]

Copyright (c) LifeInSYS
Website Template by LifeInSYS
http://lifeinsys.com
-------------------------------------------------------------------*/

/*------------------------------------------------------------------
  1. preloader
  2. navigation
    2.1. page scroll
    2.2. spy navigation
    2.3. close mobile menu
    2.4. highlight navigation
    2.5. collapse navigation
  3. animate elements
  4. facts counter
  5. forms
    5.1. contact form
  6. slick slider
    6.1. slick testimonials slideshow, slick fullscreen slideshow
	6.2. slick fullscreen slideshow ZOOM/FADE
    6.3. slick fullscreen slider TYPED text
  7. YouTube player
  8. owl carousel
    8.1. owl news carousel
  9. magnificPopup
    9.1. magnificPopup projects gallery
  10. swiper slider
    10.1. swiper parallax slider
	10.2. swiper thumbnail slider horizontal thumbs
  11. typed text
-----------------------------------------------------------------*/


$(function() {
    "use strict";
	
	
    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(600);
        $(".preloader-bg").delay(400).fadeOut(600);
    });
	
    // 2. navigation
    // 2.1. page scroll
    $(".page-scroll").on("click", function(e) {
        var $anchor = $(this);
        $("html, body").stop().animate({
            scrollTop: $($anchor.attr("href")).offset().top - 70
        }, 1500, 'easeInOutExpo');
        e.preventDefault();
    });
    // 2.2. spy navigation
    $("body").scrollspy({
        target: ".navbar",
        // offset: 70
		offset: 80
    });
    // 2.3. close mobile menu
    $(".navbar-collapse ul li a").on("click", function() {
        $(".navbar-toggle:visible").click();
    });
    // 2.4. highlight navigation
    $(".link-underline-menu").on("click", function() {
        $(".link-underline-menu").removeClass("active");
        $(this).addClass("active");
    });
	
    $(window).on("scroll", function() {
        // 2.5. collapse navigation
        if ($(".navbar").offset().top > 50) {
            $(".navbar-bg-switch").addClass("main-navigation-bg");
        } else {
            $(".navbar-bg-switch").removeClass("main-navigation-bg");
        }
		
        // 3. animate elements
        if ($(this).scrollTop() > 10) {
            $(".border-top").addClass("top-position-primary");
            $(".main-navigation-bg").addClass("main-navigation-bg-position-primary");
            $(".navbar-collapse").addClass("navbar-collapse-position-primary");
            $(".logo").addClass("logo-home-call");
            $(".main-navigation").addClass("main-navigation-home-call");
            $("h1.home-page-title").addClass("home-page-title-hide").removeClass("home-page-title-show");
			$("h2.home-page-subtitle").addClass("home-page-subtitle-hide").removeClass("home-page-subtitle-show");
            $(".scroll-indicator-wrapper").addClass("scroll-indicator-wrapper-position-secondary");
            $(".to-top-arrow").addClass("show");
        } else {
            $(".border-top").removeClass("top-position-primary");
            $(".main-navigation-bg").removeClass("main-navigation-bg-position-primary");
            $(".navbar-collapse").removeClass("navbar-collapse-position-primary");
            $(".logo").removeClass("logo-home-call");
            $(".main-navigation").removeClass("main-navigation-home-call");
            $("h1.home-page-title").removeClass("home-page-title-hide").addClass("home-page-title-show");
			$("h2.home-page-subtitle").removeClass("home-page-subtitle-hide").addClass("home-page-subtitle-show");
            $(".scroll-indicator-wrapper").removeClass("scroll-indicator-wrapper-position-secondary");
            $(".to-top-arrow").removeClass("show");
        }
    });
	
    // 4. facts counter
    $(".facts-counter-number").appear(function() {
        var count = $(this);
        count.countTo({
            from: 0,
            to: count.html(),
            speed: 2000,
            refreshInterval: 60
        });
    });
	
    // 5. forms
    // 5.1. contact form
    $("form#form").on("submit", function() {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass(
                    "inputError"), s = !0;
                else if ($(this).hasClass("email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass(
                        "inputError"), s = !0);
                }
            }), !s) {
            $("form#form input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form").slideUp("fast", function() {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });
	
    // 6. slick slider
    // 6.1. slick testimonials slideshow, slick fullscreen slideshow
    $(".testimonials-slideshow, .slick-fullscreen-slideshow").slick({
        arrows: false,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease",
        speed: 1600,
        draggable: true,
        dots: false,
        pauseOnDotsHover: false,
        pauseOnFocus: false,
        pauseOnHover: false
    });
	// 6.2. slick fullscreen slideshow ZOOM/FADE
    $(".slick-fullscreen-slideshow-zoom-fade").slick({
        arrows: false,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
        speed: 1600,
        draggable: true,
        dots: false,
        pauseOnDotsHover: true,
        pauseOnFocus: false,
        pauseOnHover: false
    });
    // 6.3. slick fullscreen slider TYPED text
    $(".slick-fullscreen").slick({
        arrows: false,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease",
        speed: 800,
        draggable: true,
        dots: false,
        pauseOnDotsHover: true,
        pauseOnFocus: false,
        pauseOnHover: false
    });
	
    // 7. YouTube player
	$("#bgndVideo").YTPlayer();
	
    // 8. owl carousel
    // 8.1. owl news carousel
    $("#news-carousel").owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1170: {
                items: 3
            }
        }
    });
	
    // 9. magnificPopup
    // 9.1. magnificPopup projects gallery
    $(".popup-photo").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
            tPrev: "",
            tNext: "",
            tCounter: "%curr% / %total%"
        },
        removalDelay: 100,
        mainClass: "mfp-fade",
        fixedContentPos: false
    });
	
	// 10. swiper slider
    // 10.1. swiper parallax slider
    var swiper = new Swiper(".parallax .swiper-container", {
        autoplay: 4000,
        speed: 800,
        parallax: true,
        mousewheelControl: false,
        keyboardControl: false,
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        paginationClickable: true
    });
    // 10.2. swiper thumbnail slider horizontal thumbs
    var swipersliderTop = new Swiper(".swiper-slider-top", {
        direction: "vertical",
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        autoplay: 4000,
        speed: 1600,
        spaceBetween: 0,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 1,
        loop: true,
        slideToClickedSlide: true,
        mousewheelControl: false,
        keyboardControl: false
    });
    var swipersliderBottom = new Swiper(".swiper-slider-bottom", {
        direction: "horizontal",
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 1,
        loop: true,
        slideToClickedSlide: true,
        mousewheelControl: false,
        keyboardControl: false
    });
    swipersliderTop.params.control = swipersliderBottom;
    swipersliderBottom.params.control = swipersliderTop;
	
	// 11. typed text
    $(".typed-title").typed({
        strings: ["Sevimeg", "Creative Template", "For Rich Man"],
        typeSpeed: 25,
        backDelay: 3500,
        loop: true
    });


});