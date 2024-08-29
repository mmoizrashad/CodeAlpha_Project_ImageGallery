// scripts.js

const thumbnails = document.querySelectorAll('.thumbnail');
const displayedImage = document.getElementById('displayedImage');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let currentIndex = 0;

const images = [
    '/pic/image 1.jpg',
    '/pic/image2.jpg',
    '/pic/image3.jpg',
    '/pic/image4.jpg',
    '/pic/image5.jpg',
    '/pic/image6.jpg',
    '/pic/image7.jpg'
    
];

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', function() {
        currentIndex = index;
        displayedImage.src = this.src.replace('100x100', '800x400');
    });
});

nextBtn.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    displayedImage.src = images[currentIndex];
});

prevBtn.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    displayedImage.src = images[currentIndex];
});
