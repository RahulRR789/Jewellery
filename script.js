const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

dropdown.addEventListener('click', () => {
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

dropdownContent.addEventListener('click', (event) => {
    const selected = event.target.closest('div');
    if (selected) {
        const img = selected.querySelector('img').src;
        const text = selected.textContent.trim();
        dropdown.innerHTML = `<img src="${img}" alt=""> ${text} <i class="fa-solid fa-angle-down"></i>`;
        dropdownContent.style.display = 'none';
    }
});

document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) {
        dropdownContent.style.display = 'none';
    }
});

let hoverEffect=document.getElementById("hoverEffect")
let bottomNav=document.getElementById("bottomNav")

bottomNav.addEventListener("mouseenter",()=>{
    hoverEffect.style.display="flex"
})
bottomNav.addEventListener("mouseleave",()=>{
    hoverEffect.style.display="none"
})

let hoverEffect1=document.getElementById("hoverEffect1")
let bottomNav1=document.getElementById("bottomNav1")

bottomNav1.addEventListener("mouseenter",()=>{
    hoverEffect.style.display="flex"
})
bottomNav1.addEventListener("mouseleave",()=>{
    hoverEffect.style.display="none"
})

// cursoler one

const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slidesContainer = document.querySelector('.slides');
let currentIndex = 1;

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');

        // Add the `active` class only to the center image
        if (index === currentIndex) {
            slide.classList.add('active');
        }
    });

    // Center the active slide
    const offset = -(currentIndex - 1) * 33.33; // Adjusting so the center image is scaled
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    updateSlides();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateSlides();
});

// Initialize the slides
updateSlides();


//cursoler 2

const sliderTrack = document.querySelector('.slider-track');
const prevButton1 = document.querySelector('.control-prev');
const nextButton1 = document.querySelector('.control-next');

let currentSlideIndex = 0;
const totalSlideGroups = 2; // 8 images in 2 groups of 4 images

function updateSliderPosition() {
    const offsetPercentage = -currentSlideIndex * 100; // Shift by 100% for each group
    sliderTrack.style.transform = `translateX(${offsetPercentage}%)`;
}

prevButton1.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex > 0) ? currentSlideIndex - 1 : totalSlideGroups - 1;
    updateSliderPosition();
});

nextButton1.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex < totalSlideGroups - 1) ? currentSlideIndex + 1 : 0;
    updateSliderPosition();
});

updateSliderPosition();
