// Array of image data
const images = [
    { thumbnail: 'images/flowers-pink-small.jpg', fullSize: 'images/flowers-pink-large.jpg', caption: 'Pink Flowers' },
    { thumbnail: 'images/flowers-purple-small.jpg', fullSize: 'images/flowers-purple-large.jpg', caption: 'Purple Flowers' },
    { thumbnail: 'images/flowers-red-small.jpg', fullSize: 'images/flowers-red-large.jpg', caption: 'Red Flowers' },
    { thumbnail: 'images/flowers-white-small.jpg', fullSize: 'images/flowers-white-large.jpg', caption: 'White Flowers' },
    { thumbnail: 'images/flowers-yellow-small.jpg', fullSize: 'images/flowers-yellow-large.jpg', caption: 'Yellow Flowers' }
];

// Get references to elements
const featuredImage = document.getElementById('featured-image');
const imageCaption = document.getElementById('image-caption');
const thumbnailGallery = document.getElementById('thumbnail-gallery');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.getElementById('close-modal');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

// Function to set the featured image
function setFeaturedImage(image) {
    featuredImage.src = image.fullSize;
    featuredImage.alt = image.caption;
    imageCaption.textContent = image.caption;
}

// Open modal and show clicked image
featuredImage.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImage.src = images[currentIndex].fullSize;
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Show previous image
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    modalImage.src = images[currentIndex].fullSize;
    setFeaturedImage(images[currentIndex]);
});

// Show next image
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    modalImage.src = images[currentIndex].fullSize;
    setFeaturedImage(images[currentIndex]);
});

// Generate thumbnails dynamically
images.forEach((image, index) => {
    const listItem = document.createElement('li');
    const img = document.createElement('img');
    img.src = image.thumbnail;
    img.alt = image.caption;
    img.classList.add('inactive');

    img.addEventListener('click', () => {
        currentIndex = index;
        setFeaturedImage(image);
        modal.style.display = 'block';
        modalImage.src = image.fullSize;
    });

    listItem.appendChild(img);
    thumbnailGallery.appendChild(listItem);

    if (index === 0) setFeaturedImage(image);
});
