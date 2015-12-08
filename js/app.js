var imageUrls = new Array("01_surrealism_day.jpg", 
	                      "02_impressionism_day.jpg",
	                      "03_fauvism_day.jpg",
	                      "04_art_nouveau_day.jpg",
	                      "05_cubism_day.jpg");

var index = Math.floor(Math.random() * imageUrls.length);

function changeBg() {
	var img = imageUrls[index];
	$('#image').css('background-image', 'url('+'../timeless_art/img/' + img + ')' );
	$('#image').fadeIn();
}

$(document).ready(function() {
	changeBg();
});