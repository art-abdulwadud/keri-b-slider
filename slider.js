// DOM Elements
let allSlides = document.querySelectorAll('.slide');
let prev = document.querySelector('.previous');
let next = document.querySelector('.next');
// Activating the first slide on load
let slideIndex = 1;
// This function activates the selected slide
const activateSlide = slide => {
	if (slide > allSlides.length) {slideIndex = 1};
	if (slide < 1) {slideIndex = allSlides.length};
	for (let i = 0; i < allSlides.length; i++) {
		allSlides[i].style.display = "none";
	}
	allSlides[slideIndex - 1].style.display = "grid";
}

activateSlide(slideIndex)
// Function for moving either to next or previous image
const slideMove = slide => {
	activateSlide(slideIndex += slide)
};


