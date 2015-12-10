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
					   "11_abstract_expressionism",
					   "12_pop_art",
					   "13_photorealism");

var titles = new Array("Impressionism | Claude Monet - Impression, Sunrise",
	                   "Fauvism | Andre Derain - Landscape near Chatou",
	                   "Art Nouveau | Scott Christian Sava - Art Nouveau 17",
	                   "Cubism | Pablo Picasso - Factory, Horta de Ebbo",
	                   "Constructivism | Rodchenko, Stepanova - Books!",
	                   "Expressionism | Edvard Munch - The Scream of Nature",
	                   "Futurism | Tullio Crali - Bombardamento Aereo",
	                   "Dadaism | René Magritte - The Treachery of Images",
	                   "Surrealism | Salvador Dalí - The Persistence of Memory",
	                   "Bauhaus | Wassily Kandinsky - Composition VIII, 1923",
	                   "Abstract Expressionism - Jackson Pollock | Convergence",
	                   "Pop Art | Roy Lichtenstein - Whaam!",
	                   "Photorealism | Robert Neffson - Notre Dame De Paris");

var index = Math.floor(Math.random() * images.length);

function updateImage() {
	$('#day').css('background-image', 'url('+'../timeless_art/img/' + images[index] + '_day.jpg)' );
	$('#night').css('background-image', 'url('+'../timeless_art/img/' + images[index] + '_night.jpg)' );
	$('#name').text(titles[index]);
}

function adjustTime() {
	var hour = new Date().getHours();
	var min = new Date().getMinutes();
	var timeOpacity = Math.abs(12 - hour)*0.1 + (min/60.0)*0.01
	$('#night').css('opacity', timeOpacity);
}

$(document).ready(function() {
	updateImage();
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

	$("#demo").click(function() {
		$('html, body').animate({
			scrollTop: $("#day").offset().top
		}, 400);
		$("#night").fadeTo(1000, 0);
		$("#night").fadeTo(8000, 1);
		$("#night").fadeTo(8000, 0);
		var timeOpacity = Math.abs(12 - new Date().getHours())*0.1 + (new Date().getMinutes()/60.0)*0.01
		$("#night").fadeTo(1000, timeOpacity);
	});

	$("#next").click(function() {
		var previous = index;
		while (index === previous) {
			index = Math.floor(Math.random() * images.length);
		}
	 	updateImage();
	})

	setInterval(adjustTime, 1000*60);
});