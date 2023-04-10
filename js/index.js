let slides = document.querySelectorAll('.slide'),
    slideIndex = 0,
    slidePlay = true;

let prev = document.querySelector('.prev')
let next = document.querySelector('.next')


const hideSlide = () => {
    slides.forEach((e) => {
        e.classList.remove('active');
    })
}

const showSlide = () => {
    hideSlide()
    slides[slideIndex].classList.add('active')
}

const nextSlide = () => {
    if(slideIndex + 1 === slides.length) {
        slideIndex = 0
        console.log(`if${slideIndex}`)
    } else {
        slideIndex = slideIndex + 1
        console.log(`else${slideIndex}`)
    }
}

const prevSlide = () => {
    if(slideIndex - 1 < 0) {
        slideIndex = slideIndex + slides.length - 1;
        console.log(`if${slideIndex}`)
    } else {
        slideIndex = slideIndex - 1;
        console.log(`else${slideIndex}`)
    }
}




next.addEventListener('click', () => {
    nextSlide()
    showSlide()
})
prev.addEventListener('click', () => {
    prevSlide()
    showSlide()
})

setInterval(() => {
    if(slidePlay) {
        nextSlide()
        showSlide()
    }
}, 3000);

let slider = document.querySelector('#slider');

slider.addEventListener('mouseover', () => slidePlay = false)
slider.addEventListener('mouseleave', () => slidePlay = true)