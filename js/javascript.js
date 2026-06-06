const botaoTema = document.getElementById("theme-toggle");

botaoTema.onclick = function () {

    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")){
        botaoTema.textContent = "Modo Escuro";
    } else {
        botaoTema.textContent = "Modo Claro";
    }
};

const carouselSlides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let currentSlide = 0;
let carouselInterval;

function showSlide(index) {
    carouselSlides.forEach(slide => slide.classList.remove('active'));
    carouselSlides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % carouselSlides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + carouselSlides.length) % carouselSlides.length;
    showSlide(currentSlide);
}

function startAutoCarousel() {
    carouselInterval = setInterval(nextSlide, 5000);
}

function stopAutoCarousel() {
    clearInterval(carouselInterval);
}

if (carouselSlides.length > 0) {
    showSlide(0);
    startAutoCarousel();

    prevBtn?.addEventListener('click', () => {
        prevSlide();
        stopAutoCarousel();
        startAutoCarousel();
    });

    nextBtn?.addEventListener('click', () => {
        nextSlide();
        stopAutoCarousel();
        startAutoCarousel();
    });
}
