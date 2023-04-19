const largeImage = document.querySelector('.allproduct__large-img');
const images = document.querySelectorAll('.allproduct__img');

images.forEach((e) => {
    e.addEventListener('click', () => {
        largeImage.src = e.src
    })
})

const min = document.querySelector('.minus')
const sum = document.querySelector('.sum span')
const plus = document.querySelector('.plus')
let indicator = document.querySelector('.amount__indicator')
let num = +indicator.innerHTML
let count = sum.innerHTML
plus.addEventListener('click', () => {
    if (indicator.innerHTML < 10) {
        indicator.innerHTML++
        sum.innerHTML = count * indicator.innerHTML
    }
})

min.addEventListener('click', () => {
    if (indicator.innerHTML > 0) {
        indicator.innerHTML-- 
        sum.innerHTML = count * indicator.innerHTML
    }
})

