const body = document.querySelector('body');
const btnOpen = document.querySelector('#openBtn');
const btnClose = document.querySelector('#closeBtn');

const mediaScreen = window.matchMedia('(width <= 800px)');
const navContent = document.querySelector('.nav__content');
const navOverlay = document.querySelector('.nav__overlay');

let productPreview = document.querySelector('#productPreview');
const nextBtn = document.getElementById('slideRightBtn');


// const changePreview = `<img id="productPreview" src="./images/image-product-${i}.jpg" alt="image of sneaker">`;

// console.log(nextBtn);


// nextBtn.addEventListener('click', nextImage);
// let i = 1;
// function nextImage() {
//         productPreview.src = `./images/image-product-${i}.jpg`;
//         console.log(i);
//         i += 1;
// }

const productImages = [
    `./images/image-product-1.jpg`,
    `./images/image-product-2.jpg`,
    `./images/image-product-3.jpg`,
    `./images/image-product-4.jpg`,
]
nextBtn.addEventListener('click', nextImage);
function nextImage() {
    productPreview.src = productImages[1];
}


function openMobileMenu() {
    console.log(btnOpen);

    btnOpen.setAttribute('aria-expanded', 'true');
    body.classList.add('no-scroll');
}
function closeMobileMenu() {
    console.log(btnOpen);

    btnOpen.setAttribute('aria-expanded', 'false');
    body.classList.remove('no-scroll');
}

function setupNav() {
    if (mediaScreen.matches) {
        //check if the screen is for mobile
        console.log('is mobile');

        setTimeout(() => {
            navContent.style.display = 'block';
            navOverlay.style.display = 'block';
        }, 500);

    }
    else {
        console.log('is desktop');
        navContent.style.display = '';
        navOverlay.style.display = '';
    }
}

setupNav(mediaScreen);

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);

mediaScreen.addEventListener('change', function (e) {
    setupNav(e)
});