console.log('Hello world!');

var headerHeight = null;

$(document).ready(function() {
	console.log('ready');
	headerHeight = $('header').height();
	console.log(headerHeight);
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
});