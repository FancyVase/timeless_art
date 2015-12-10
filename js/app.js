var images = new Array("01_impressionism", 
					   "02_fauvism",
					   "03_art_nouveau",
					   "04_cubism",
					   "05_constructivism",
					   "06_expressionism",
					   "07_futurism",
					   "08_dadaism",
					   "09_surrealism",
					   "10_bauhaus",
					   "11_abstract_impressionism",
					   "12_pop_art",
					   "13_photorealism");

var index = Math.floor(Math.random() * images.length);

function changeBg() {
	$('#day').css('background-image', 'url('+'../timeless_art/img/' + images[index] + '_day.jpg)' );
	$('#night').css('background-image', 'url('+'../timeless_art/img/' + images[index] + '_night.jpg)' );
}

function adjustTime() {
	var hour = new Date().getHours();
	var min = new Date().getMinutes();
	var timeOpacity = Math.abs(12 - hour)*0.1 + (min/60.0)*0.01
	$('#night').css('opacity', timeOpacity);
}

$(document).ready(function() {
	changeBg();
	adjustTime();

	$("#title").click(function() {
		$('html, body').animate({
			scrollTop: $("#day").offset().top
		}, 500);
	});

	$("#me").click(function() {
		$('html, body').animate({
			scrollTop: $("#day").offset().top
		}, 400);
		$("#night").fadeTo(8000, 0);
		$("#night").fadeTo(8000, 1);
		var timeOpacity = Math.abs(12 - new Date().getHours())*0.1 + (new Date().getMinutes()/60.0)*0.01
		$("#night").fadeTo(8000, timeOpacity);
	});

	setInterval(adjustTime, 1000*60);
});