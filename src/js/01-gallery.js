// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const galleryList = document.querySelector('.gallery');
const ItemsMarkup = createGalleryItemsMarkup(galleryItems);
const { preview, original, description } = galleryItems;

galleryList.insertAdjacentHTML('beforeend', ItemsMarkup);

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>
    `;
    }).join('');
}

galleryList.addEventListener('click', onImageItemClick);

function onImageItemClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }

    console.log(evt.target)

    const listenerFunc = function (evt) {
        if (evt.key === 'Escape') {
            instance.close()
        }
    }

    const instance = basicLightbox
        .create(`<img src="${evt.target.dataset.source}" width="800" height="600">`,
            {
                onShow: (instance) => {
                    galleryList.addEventListener('keydown', listenerFunc)
                 },
                onClose: (instance) => {
                    galleryList.removeEventListener('keydown', listenerFunc)
                }
            })
    
    instance.show()
}
