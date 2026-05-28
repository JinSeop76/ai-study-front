// 기존 소스
// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')


// 변경 소스
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router'
import App from './App.vue'
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
