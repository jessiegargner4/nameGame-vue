import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router';

const app = createApp(App)

app.use(createPinia())

// app.mount('#app') //Application instance will not render without this

createApp(App).use(router).mount('#app');
