const botaoTema = document.getElementById("theme-toggle");

botaoTema.onclick = function () {

    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")){
        botaoTema.textContent = "Modo Escuro";
    } else {
        botaoTema.textContent = "Modo Claro";
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".carousel-slide");
    let currentSlideIndex = 0;
    const slideIntervalTime = 5000; 
    function nextSlide() {
        slides[currentSlideIndex].classList.remove("active");
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        slides[currentSlideIndex].classList.add("active");
    }
    if (slides.length > 1) {
        setInterval(nextSlide, slideIntervalTime);
    }
});