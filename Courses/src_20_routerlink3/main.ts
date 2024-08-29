import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

// create an application
const app = createApp(App);

// use router
app.use(router);

// hang in the whole app container
app.mount('#app');