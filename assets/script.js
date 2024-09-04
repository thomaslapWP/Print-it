

document.addEventListener('DOMContentLoaded', () => {
    const slides = [
        { image: "./assets/images/slideshow/slide1.jpg", tagLine: "Impressions tous formats <span>en boutique et en ligne</span>" },
        { image: "./assets/images/slideshow/slide2.jpg", tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>" },
        { image: "./assets/images/slideshow/slide3.jpg", tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>" },
        { image: "./assets/images/slideshow/slide4.png", tagLine: "Autocollants <span>avec découpe laser sur mesure</span>" }
    ];

    let currentIndex = 0;

    const select = (s) => document.querySelector(s);
    const updateSlide = (index) => {
        select('.banner-img').src = slides[index].image;
        select('#banner p').innerHTML = slides[index].tagLine;
        [...select('.dots').children].forEach((dot, i) => dot.classList.toggle('dot_selected', i === index));
    };

    const goToSlide = (index) => {
        currentIndex = index;
        updateSlide(currentIndex);
    };

    slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot', ...(i === 0 ? ['dot_selected'] : []));
        dot.addEventListener('click', () => goToSlide(i));
        select('.dots').appendChild(dot);
    });

    const attachEvent = (s, fn) => select(s).addEventListener('click', fn);
    attachEvent('.arrow_right', () => goToSlide((currentIndex + 1) % slides.length));
    attachEvent('.arrow_left', () => goToSlide((currentIndex - 1 + slides.length) % slides.length));

    updateSlide(currentIndex);
});
