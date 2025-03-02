//запити на бєкенд
import axios from 'axios';
import { imageTemplate } from './render-functions';
import { imagesTemplate } from './render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { hideLoader } from './render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';



export const refs = {
  form: document.querySelector('.search-form'),
  input: document.querySelector('#input'),
  button: document.querySelector('button-search'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader-box'),
};

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});


export function createImages(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '49126238-069e1a94ee3ccc35c34a34de0';
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };
  return axios
    .get(BASE_URL, { params })
    .then(({ data }) => {
      if (data.hits.length === 0) {
        iziToast.info({
          title: 'No Results',
          message: `No images found for your search.`,
          position: 'topRight',
        });
      } else {
        refs.input.value = '';
        const markup = imagesTemplate(data.hits);

        refs.gallery.innerHTML = markup;
        hideLoader();
      }
    })

    .catch(error => {
      hideLoader();
      iziToast.error({
        title: 'Error',
        message: `❌ Error fetching images. Please try again!`,
        position: 'topRight',
      });
    });
}