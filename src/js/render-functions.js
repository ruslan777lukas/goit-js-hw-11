//малюємо інтерфейс
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from './pixabay-api';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function imageTemplate(img) {
  const {
    largeImageURL,
    webformatURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = img;
  const markup = `<li class="photo-card">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
    />
  </a>
  <div class="info">
        <p>Likes: <span class="likes">${likes}</span></p>
        <p>Views: <span class="views">${views}</span></p>
        <p>Comments: <span class="comments">${comments}</span></p>
        <p>Downloads: <span class="downloads">${downloads}</span></p>
      </div>
</li>`;
  return markup;
}



export function showLoader() {
  refs.gallery.classList.add('hidden');
  refs.loader.classList.remove('hidden');
}

export function hideLoader() {
  refs.loader.classList.add('hidden');
  refs.gallery.classList.remove('hidden');
}

export function imagesTemplate(arr) {
  hideLoader();
  return arr.map(imageTemplate).join('');
}