// Updated Mobile Navigation Toggle to change icon state
function toggleMenu() {
    let menu = document.getElementById("navLinks");
    let toggleBtn = document.querySelector(".menu-toggle");
    menu.classList.toggle("active");
    
    if (menu.classList.contains("active")) {
        toggleBtn.textContent = "✕";
    } else {
        toggleBtn.textContent = "☰";
    }
}

// Automatic Image Slider
let slideIndex = 0;
let slides = document.querySelectorAll(".slide");

function showSlides() {
    // Hide all slides
    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    slideIndex++;

    // Reset back to first slide if out of bounds
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Display the current active slide
    if (slides.length > 0) {
        slides[slideIndex - 1].classList.add("active");
    }

    // Run again in 4 seconds
    setTimeout(showSlides, 4000);
}

// Initialize slider once the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    showSlides();
});
// Monitor scroll behavior to display or hide Back to Top button
window.addEventListener("scroll", function() {
    let backToTopButton = document.getElementById("backToTopBtn");
    if (window.scrollY > 300) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});

// Smooth scroll functionality back to the top of document page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
