import { createApp } from 'vue'
import './style.css'
// @ts-ignore
import router from './router/router.js'
import App from './App.vue'

const app = createApp(App)
app.use(router)
.mount('#app')
