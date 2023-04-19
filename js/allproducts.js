const largeImage = document.querySelector('.allproduct__large-img');
const images = document.querySelectorAll('.allproduct__img');

images.forEach((e) => {
    e.addEventListener('click', () => {
        largeImage.src = e.src
    })
})