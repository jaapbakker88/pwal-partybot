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

$(document).ready(function () {
	if(window.location.href.indexOf("producthunt") > -1) {
		// $('.producthunt').hide();
		// $('.producthunt2').show();
		// $('#one .buttons').addClass('kitty');
		// $(".badge").css("background-color", "#da552f");
		// $('.kitty h4 strong').each(function() {
		// 	var text = $(this).text();
  //   		$(this).text(text.replace('people', 'kitties')); 
  //   	});

		// console.log('xxxxx xxxxxxxxxxxxxxx xxxxx\nxxxx x xxxxxxxxxxxxx x xxxx\nxxx xxxx           xxxx xxx\nxx  xxxxxxxxxxxxxxxxxxx  xx\nxx  xxxx xxxxxxxxx xxxx  xx Happy Hunting!!!!\nxx  xxx x xxxxxxx x xxx  xx\nxx  xxxxxxxxxxxxxxxxxxx  xx Product Hunters!!!\nxxx  xxx  xxxxxxx  xxx  xxx\nxxxx  xxx         xxx  xxxx\nxxxxxx  xxxxxxxxxxx  xxxxxx\nxxxxxxxxxxxxxxxxxxxxxxxxxxx\n');
	}
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'js/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});