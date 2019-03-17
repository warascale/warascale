window.$ = window.jQuery = require("jquery");
import TypeIt from 'typeit';
import Scrollify from 'jquery-scrollify';
import Easing from 'jquery-easing';
import localScroll from 'jquery.localscroll';
import scrollTo from 'jquery.scrollto';

$(document).ready(function() {

    // ==============================================
    // AUTOTYPE || TypeIt
    // ==============================================

    new TypeIt('#autotype', {
        strings: ['INOVATIF', 'KREATIF', 'INSPIRATIF',''],
        breakLines: false,
        speed: 110,
        loop: true,
        loopDelay: true,
        nextStringDelay: '2000',
        startDelete: true,
        startDelay: 1000
    });

    // ==============================================
    // Responsive - Ganti Warna Nav Toggle
    // ==============================================

    if(screen.width <= 768) {
        console.log(screen.width);
        $('.mainnav__toggle .btn').removeClass('btn-white').addClass('btn-gradient');
    }

    $(window).resize(function() {
        console.log(this.screen.width);
        if(this.screen.width <= 768) {
            $('.mainnav__toggle .btn').removeClass('btn-white').addClass('btn-gradient');
        } else {
            $('.mainnav__toggle .btn').removeClass('btn-gradient').addClass('btn-white');
        }
    });

    // ==============================================
    // Nav Toggle Active
    // ==============================================

    $('.mainnav__toggle').click(function() {
        $('#nav-toggle').addClass('active');

        $('#nav-toggle .dark-background').click(function(event) {
            if(event.target == this) {
                $('#nav-toggle').removeClass('active');
            }
        })
    });

    // ==============================================
    // Button Go Up
    // ==============================================

    $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        if(scroll >= 50) {
            $('.footer__button-goup').addClass('show');
        } else {
            $('.footer__button-goup').removeClass('show');
        }
    });

    // ==============================================
    // ScrollTo Plugin
    // ==============================================
    
    $('.footer__button-goup').click(function() { $(window).scrollTo('header', 1200, { easing: 'easeInOutCubic' }) });
    $('.banner__button-godown, .banner__button').click(function() { 
        $(window).scrollTo('main', 1000, { easing: 'easeInOutCubic' });
    });

    // ==============================================
    // Talent Card Item
    // ==============================================

    $('.talent__card').click(function() {
        $('#talent-preview').addClass('active');

        $('#talent-preview').click(function(event) {
            if(event.target == this) {
                $('#talent-preview').removeClass('active');
            }
        });

        $('.preview__close').click(function() {
            $('#talent-preview').removeClass('active');
        });
    });

    // ====================================================================

    // $('.banner__button .btn, .banner__button-godown').click(function() {
    //     $.scrollify.next();
    // });

    // $.scrollify({
    //     section: ".section-scroll",
    //     easing: "easeInOutCubic",
    //     scrollSpeed: 1200,
    //     scrollbars: false,
    //     overflowScroll: true,
    //     updateHash: false,
    //     setHeights: false,
    // });

    // $('.footer__button-goup').localScroll({
    //     target:'#banner-home'
    // });
    
    // $('.footer__button-goup').click(function() {
    //     $.scrollify.move("#banner-home");
    // });
    

    // $.scrollify({
    //     section : "section",
    //     sectionName : "section-name",
    //     interstitialSection : "",
    //     easing: "easeOutExpo",
    //     scrollSpeed: 1100,
    //     offset : 0,
    //     scrollbars: true,
    //     standardScrollElements: "",
    //     setHeights: true,
    //     overflowScroll: true,
    //     updateHash: true,
    //     touchScroll:true,
    //     before:function() {},
    //     after:function() {},
    //     afterResize:function() {},
    //     afterRender:function() {}
    // });
});