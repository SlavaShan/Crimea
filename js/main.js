$(document).ready(function(){
	$('.map').maphilight({
		fill: true,
		fillColor: 'd8d908',
		fillOpacity: 0.6,
		stroke: true,
		strokeColor: 'ffffff',
		strokeOpacity: 1,
		strokeWidth: 2,
		fade: true,
		alwaysOn: false,
		neverOn: false,
		groupBy: false,
		wrapClass: true,
		shadow: false,
		shadowX: 0,
		shadowY: 0,
		shadowRadius: 6,
		shadowColor: '000000',
		shadowOpacity: 0.8,
		shadowPosition: 'outside',
		shadowFrom: false
	});

	$('#slideshow').cycle({
	    fx: 'scrollHorz',
	    speed: 'middle',
	    timeout: 0,
	    // prev: '#prev',
	    // next: '#next',
	    nowrap: 1,
	    pager: '.carousel-pager',
	    pagerAnchorBuilder: function(idx, slide) {
	        // return selector string for existing anchor
	        return '.carousel-pager .slide:eq(' + idx + ') a';
	    },
	    onPrevNextEvent: function(dir, id, el) {
	        if (dir === true) {
	        if (id >= 3) { //replace '3' with your number of visible elements
	            $('.bx-next').click();
	        }
	        }
	        else {
	        if (id >= 1) {
	            $('.bx-prev').click();
	        }
	        }
	    }
	});
	 
	$('.carousel-pager').bxSlider({
		minSlides: 1,
		maxSlides: 3,
		slideWidth: 90,
		pager: false,
		moveSlides: 1,
		infiniteLoop: false,
		slideMargin: 10,
		nextSelector: '#slider-next',
		  prevSelector: '#slider-prev',
		nextText: '<img src="images/carousel-left-arrow.png" height="35" width="35"/>',
		  prevText: '<img src="images/carousel-right-arrow.png" height="35" width="35"/>',
		hideControlOnEnd: true
	});


	});

