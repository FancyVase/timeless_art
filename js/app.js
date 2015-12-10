var images = new Array("01_surrealism", 
					   "02_impressionism",
					   "03_fauvism",
					   "04_art_nouveau",
					   "05_cubism",
					   "06_pop_art",
					   "07_photorealism");

var index = Math.floor(Math.random() * images.length);

function changeBg() {
	$('#day').css('background-image', 'url('+'../timeless_art/img/' + images[index] + '_day.jpg)' );
	$('#night').css('background-image', 'url('+'../timeless_art/img/' + images[index] + '_day.jpg)' );
}

$(document).ready(function() {
	changeBg();

	$("#title").click(function() {
		$('html, body').animate({
			scrollTop: $("#day").offset().top
		}, 500);
	});
});