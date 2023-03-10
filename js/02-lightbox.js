import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

function fillGalleryBox(itemsArr) {
  const image = itemsArr.map(img => {
    return `
    <div class="gallery__item">
    <a class="gallery__item" href="${img.original}">
    <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
    </a>
    </div>`
}).join('');
  galleryContainer.innerHTML = image;
  const lightbox = new SimpleLightbox('.gallery a', {
    captionSelector: '.gallery__image',
    captionsData: 'alt',
    captionDelay: 250,
  });
}

fillGalleryBox(galleryItems);

