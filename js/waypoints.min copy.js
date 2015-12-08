var imageUrls = [
	"../img/01_surrealism_day.jpg"
];

function getImageTag() {
	var img = '<img src=\"';
	var randomIndex = Math.floor(Math.random() * imageUrls.length);
	img += imageUrls[randomIndex];
	img += '\" />'
	console.log(img);
	return img;
}

document.write(getImageTag());