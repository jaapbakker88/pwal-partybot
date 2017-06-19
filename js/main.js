$("#more").click(function() {
	event.preventDefault();
	$('html, body').animate({
	    scrollTop: $("#two").offset().top
	}, 750);
});

$(document).ready(function() {
	/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
	particlesJS.load('particles-js', 'js/particlesjs-config.json', function() {
	  console.log('callback - particles.js config loaded');
	});

    $('.writing').delay(2000).fadeOut();
    $('.intro').delay(2500).fadeIn('fast');
    $('.writing').delay(1000).fadeIn('fast');
    $('.writing').delay(3000).fadeOut();
    $('.button').delay(7000).fadeIn('fast');
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

