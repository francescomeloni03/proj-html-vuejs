import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faApple, faWindows, faAndroid, faTwitter, faInstagram, faYoutube, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faArrowRight, faAngleRight, faFileLines, faMugSaucer, faCubes, faDesktop, faWrench, faChevronUp } from '@fortawesome/free-solid-svg-icons';

library.add(faMagnifyingGlass, faArrowRight, faAngleRight, faFileLines, faApple, faWindows, faAndroid, faMugSaucer, faCubes, faDesktop, faWrench, faCopyright, faFacebookF, faTwitter, faInstagram, faYoutube, faChevronUp)
createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
