const largeImage = document.querySelector('.allproduct__large-img');
const images = document.querySelectorAll('.allproduct__img');

images.forEach((e) => {
    e.addEventListener('click', () => {
        largeImage.src = e.src
    })
})

const min = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const indicator = document.querySelector('.amount__indicator')
const num = indicator.innerHTML


min.addEventListener('click', () => {
    if (num == 0) {
    }
})