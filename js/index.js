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
    } else {
        slideIndex = slideIndex + 1
    }
}

const prevSlide = () => {
    if(slideIndex - 1 < 0) {
        slideIndex = slideIndex + slides.length - 1;
    } else {
        slideIndex = slideIndex - 1;
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






// render 

const products = [
    {
        name: 'JBL E55BT KEY BLACK',
        image1: '/project1/Images/products/img-lg-black.png',
        image2: '/project1/Images/products/img-lg-black-hover.webp',
        oldPrice: '$400',
        currentPrice: '$500'
    },
    {
        name: 'JBL JR 310BT',
        image1: '/project1/Images/products/img-lg-blue.png',
        image2: '/project1/Images/products/img-lg-blue-hover.png',
        oldPrice: '$250',
        currentPrice: '$350'
    },
    {
        name: 'JBL TUNE 750BTNC',
        image1: '/project1/Images/products/img-sm-red.png',
        image2: '/project1/Images/products/img-lg-red-hover.webp',
        oldPrice: '$400',
        currentPrice: '$500'
    },
    {
        name: 'JBL Horizon',
        image1: '/project1/Images/products/clock.png',
        image2: '/project1/Images/products/clock-hover.webp',
        oldPrice: '$600',
        currentPrice: '$730'
    },
    {
        name: 'JBL Tune 220TWS',
        image1: '/project1/Images/products/airpods.png',
        image2: '/project1/Images/products/airpods-hover.png',
        oldPrice: '$300',
        currentPrice: '$400'
    },
    {
        name: 'UA Project Rock',
        image1: '/project1/Images/products/airpods-black.png',
        image2: '/project1/Images/products/airpods-black-hover.png',
        oldPrice: '$400',
        currentPrice: '$500'
    },
    {
        name: 'JBL Endurance SPRINT',
        image1: '/project1/Images/products/earphone-red.webp',
        image2: '/project1/Images/products/earphone-red-hover.webp',
        oldPrice: '$450',
        currentPrice: '$530'
    },
]


const productList = document.querySelector('#latest-product');
const bestProductList = document.querySelector('#best-product');

products.forEach((e) => {
    let product = `
    <div class="col-3">
        <div class="product__card">
            <div class="product__card-img">
                <img src="${e.image1}" alt="">
                <img src="${e.image2}" alt="">
            </div>
            <div class="product__card-info">
                <div class="product__card-btns">
                    <button class="btn-flat product__card-btn">SHOP NOW</button>
                    <button class="btn-flat product__card-btn"><i class="fa-solid fa-cart-shopping"></i></button>
                    <button class="btn-flat product__card-btn"><i class="fa-solid fa-heart"></i></button>
                </div>
                <h4 class="product__card-name">${e.name}</h4>
                <div class="product__card-price">
                    <span><del>${e.oldPrice}</del></span>
                    <span class="current__price">${e.currentPrice}</span>
                </div>
            </div>
        </div>
    </div>  
    `

    productList.insertAdjacentHTML('beforeend', product);
    bestProductList.insertAdjacentHTML('afterbegin', product);
})
