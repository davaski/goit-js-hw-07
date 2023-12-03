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
galleryList.addEventListener("click", selectElement);

function selectElement(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`,
    {
      onShow: () => {
        window.addEventListener("keydown", closeModalByEsc);
      },
      onClose: () => {
        window.removeEventListener("keydown", closeModalByEsc);
      },
    }
  );
  const closeModalByEsc = (event) => {
    if (event.key === "Escape") {
      return instance.close();
    }
  };
  instance.show();
}
