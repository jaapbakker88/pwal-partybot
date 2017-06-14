$("#more").click(function() {
	event.preventDefault();
	$('html, body').animate({
	    scrollTop: $("#two").offset().top
	}, 750);
});

$(document).ready(function() {
    $('.writing').delay(1000).fadeOut();
    $('.intro').delay(1500).fadeIn('fast');
    $('.writing').delay(500).fadeIn('fast');
    $('.writing').delay(500).fadeOut();
    $('.button').delay(3300).fadeIn('fast');

});