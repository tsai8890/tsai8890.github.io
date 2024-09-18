// Carousel 

const slides = document.getElementsByClassName("carousel-item");
const nextButton = document.getElementById("carousel-button-next");
const prevButton = document.getElementById("carousel-button-prev");

let position = 0;
const numberOfSlides = slides.length;

function hideAllSlides() {
    for (let i = 0; i < slides.length; i += 1) {
        slides[i].classList.remove("carousel-visible");
        slides[i].classList.add("carousel-hidden");
    }
}

const handleNextSlide = function(e) {
    hideAllSlides();
    
    if (position === numberOfSlides - 1) {
        position = 0;
    } else {
        position += 1;
    }
    slides[position].classList.add("carousel-visible");
}

const handlePreviousSlide = function(e) {
    hideAllSlides();
    
    if (position === 0) {
        position = numberOfSlides - 1;
    } else {
        position -= 1;
    }
    slides[position].classList.add("carousel-visible");
}

nextButton.addEventListener("click", handleNextSlide);
prevButton.addEventListener("click", handlePreviousSlide);