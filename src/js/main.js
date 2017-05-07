console.log('Hello world!');

var headerHeight = null;
var documentHeight = null;

function scrollToTop() {
	$(window).scrollTop(0);
}

$(document).ready(function() {
	console.log('ready');
	headerHeight = $('header').height();
	documentHeight = $(document).height();
	$('.scroll-to-top').click(function() {
		scrollToTop();
	});
});

$(window).resize(function() {
	console.log('resize');
});

$(window).scroll(function() {
	var scrollAmount = $(window).scrollTop();
	if (scrollAmount > headerHeight) {
		$('nav').css({
			'position': 'fixed'
		});
	} else {
		$('nav').css({
			'position': 'absolute'
		});
	}
	var scrollTotal = scrollAmount + $(window).height();
	if (scrollTotal > documentHeight) {
		$('.scroll-to-top').css({
			'display': 'block'
		});
	} else {
		$('.scroll-to-top').css({
			'display': 'none'
		});
	}
});