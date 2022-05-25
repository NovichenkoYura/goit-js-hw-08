// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const ItemsMarkup = createGalleryItemsMarkup(galleryItems);
// const { preview, original, description } = galleryItems;

galleryList.insertAdjacentHTML('beforeend', ItemsMarkup);


function createGalleryItemsMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `
    <li class="gallery__li">
    <a class="gallery__item" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
        />
    </a>
    </li>
    `;
    }).join('');
}

var lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });
    
shown.simplelightbox