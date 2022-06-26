// IMPORTS TO THE APP
import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css" // IMPORTANDO O BOOTSTRAP
import "bootstrap/dist/js/bootstrap.min.js"
import router from './router/router' // IMPORTANDO O ROUTER
import store from './store/store' // IMPORTANDO O STORE
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faXmark, faAngleRight, faEnvelope, faPhone, faLocationDot, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faXmark, faAngleRight, faEnvelope, faPhone, faLocationDot, faEllipsisVertical);

// , faInstagram, faTwitter, faGithub

// START THE APP
createApp(App)
.use(router)
.use(store)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')