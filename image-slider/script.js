const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let slideIndex = 0;
let intervalID = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        dots[slideIndex].classList.add("active"); // highlight first dot
        intervalID = setInterval(nextSlide, 5000);
    }
}

function showSlide(index) {
    if (index >= slides.length) { 
        slideIndex = 0;
    } else if (index < 0) { 
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    // hide all slides + deactivate all dots
    slides.forEach(slide => slide.classList.remove("displaySlide"));
    dots.forEach(dot => dot.classList.remove("active"));

    // show current slide + activate dot
    slides[slideIndex].classList.add("displaySlide");
    dots[slideIndex].classList.add("active");
}

function prevSlide() {
    clearInterval(intervalID);
    showSlide(slideIndex - 1);
    intervalID = setInterval(nextSlide, 5000); // restart auto play
}

function nextSlide() {
    clearInterval(intervalID);
    showSlide(slideIndex + 1);
    intervalID = setInterval(nextSlide, 5000);
}

// when user clicks a dot
function currentSlide(n) {
    clearInterval(intervalID);
    showSlide(n - 1); // dots are 1-based, slides are 0-based
    intervalID = setInterval(nextSlide, 5000);
}
