$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// pin the intro
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#intro',
		triggerHook: 0,
		duration: '10%'
	})
	.setPin('#intro', {pushFollowers: false})
	.addTo(controller);

	// pin the contact info
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#contact',
		triggerHook: 0,
		duration: '60%'
	})
	.setPin('#contact', {pushFollowers: false})
	.addTo(controller);


	// loop through each .project element
	$('.project').each(function(){

		// build a scene
		var ourScene = new ScrollMagic.Scene({
			triggerElement: this.children[0],
			triggerHook: 0.9
		})
		.setClassToggle(this, 'fade-in') // add class to project01

		.addTo(controller);

	});

});
