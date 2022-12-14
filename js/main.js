var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 700,
	speedAsDuration: true
});


$(window).scroll(function () {
	let x = $(window).scrollTop()
	if (x > 50) {
		$('.navbar').css({
			
			'background-color': '#89a794',

		})
		$('.nav-link').css({
			'color': 'white'
		})
	}
	else {
		$('.navbar').css({
			
			'background-color': 'transparent',

		})
		$('.nav-link').css({
			'color': 'black'
		})
	}

})

new WOW().init();