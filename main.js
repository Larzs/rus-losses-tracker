import Alpine from 'alpinejs';
import warProgress from './warProgress.js'
import './style.scss';

document.addEventListener('alpine:init', () => {
    Alpine.data('warProgress', warProgress);
})

Alpine.start();
