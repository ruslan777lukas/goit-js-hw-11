import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createImages } from './js/pixabay-api';
import { hideLoader, showLoader } from './js/render-functions';
import { refs } from './js/pixabay-api';

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const query = e.target.elements.input.value.trim();
  showLoader();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    hideLoader();
    return;
  }
  createImages(query);
});
