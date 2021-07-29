/*
	Project Name : Insurance
	Author Company : Ewebcraft
	Project Date: 25 April, 2017
	Author Website : http://www.ewebcraft.com
	Author Email : ewebcraft@gmail.com
*/

$(document).ready(function() {    
	"use strict";

	/* -----_____ Initialize WOW _____----- */

	new WOW().init();

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });

	/* -----_____ Smoth Scroll _____----- */

        $(".scroll").click(function(event){
            event.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 2000);
        });

    /* -----_____ Back To Top _____----- */

    window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	        $('#backToTop').addClass('btt-show');
	    } else {
	        $('#backToTop').removeClass('btt-show');
	    }
	}

	/* -----_____ Testimonial Carousel _____----- */

    var total_insCar = $('.insurance-car').length;
        if(total_insCar >= 1) {
            $('.insurance-car').owlCarousel({
                margin: 0,
                loop: true,
                dots: false,
                items :1,
                autoplay: true,
                singleItem: true
            });
        }
	
});