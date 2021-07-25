// Slider
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider--section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnIzq = document.querySelector("#btn--izq");
const btnDer = document.querySelector("#btn--der");

slider.insertAdjacentElement("afterbegin",sliderSectionLast);

function Siguiente(){
    let sliderSectionFirst = document.querySelectorAll(".slider--section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend",sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function Anterior(){
    let sliderSection = document.querySelectorAll(".slider--section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin",sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnDer.addEventListener('click', function(){
    Siguiente();
});

btnIzq.addEventListener('click', function(){
    Anterior();
});

setInterval(() => {
    Siguiente();
}, 5000);