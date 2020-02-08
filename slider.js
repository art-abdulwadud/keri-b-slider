// DOM Elements
let allSlides = document.querySelectorAll('.slide');
let prev = document.querySelector('.previous');
let next = document.querySelector('.next');
let slideLinks = document.querySelectorAll('.slide-links');
// Setting the first slide on load
let slideIndex = 1;
// This function activates the selected slide
const activateSlide = slide => {
	// Making sure that slideIndex is never less than 0 or more than number of existing slides
	slide < 1 ? slideIndex = allSlides.length: 0;
	slide > allSlides.length ? slideIndex = 1: 0;
	// Hidding the slides
	for (let i = 0; i < allSlides.length; i++) {
		allSlides[i].style.display = "none";
	}
	// Selecting a slide manually on click
	for (let i = 0; i < slideLinks.length; i++) {
		slideLinks[i].classList.remove('active')
	}
	// Showing only one slide
	allSlides[slideIndex - 1].style.display = "grid";
	slideLinks[slideIndex - 1].classList.add('active');
}
// Activating the first slide on load
activateSlide(slideIndex)
// Function for moving either to next or previous image
const slideMove = slide => {
	activateSlide(slideIndex += slide)
};
// Function manually selecting a slide on click
const selectSlide = slide => {
	activateSlide(slideIndex = slide)
}

