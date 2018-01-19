var slideIndex = 1;
showDivs(slideIndex);

// n represents integer value - any of the 7 images
function plusDivs(n) {
	showDivs(slideIndex += n);
}

function showDivs(n) {
	// i will act as a counter	
	var i;
	var x = document.getElementsByClassName("mySlides");
	if (n > x.length) {slideIndex = 1}
	if (n < 1) {slideIndex = x.length}
	for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";
		}
		// display the images as a block	
		x[slideIndex -1].style.display = "block";
	}