import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

galleryContainer.addEventListener("click", onGalleryClick)

function fillGalleryBox(itemsArr) {
    const image = itemsArr.map(img => {
        return `
    <div class="gallery__item">
    <a class="gallery__link" href="${img.original}">
      <img 
        class="gallery__image"
        src="${img.preview}"
        data-source="${img.original}"
        alt="${img.description}"
      />
    </a>
  </div>`
}).join('');
// console.log("🚀 ", image);
galleryContainer.innerHTML = image;
}

function onGalleryClick(events) {
    events.preventDefault();
    const { target } = events;
    if (target.nodeName === "IMG") {
        console.log(target.dataset.source)
    }
}


fillGalleryBox(galleryItems);

// console.log(galleryItems);
