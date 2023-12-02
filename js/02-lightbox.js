import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryList = document.querySelector(".gallery");
const galleryCollection = createGallery(galleryItems);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery_item"><a class="gallery__link" href = ${original}><img class="gallery__image" src ="${preview}" data-source=${original}" alt="${description}" width="400"/>
    </a></div>`;
    })
    .join("");
}

galleryList.insertAdjacentHTML("beforeend", galleryCollection);
const result = new SimpleLightbox(".gallery a", {
  overlayOpacity: 1,
  captionsData: "alt",
  captionDelay: 250,
});
