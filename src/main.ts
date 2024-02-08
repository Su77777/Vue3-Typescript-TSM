import './assets/main.css'
import 'normalize.css'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './storage'

// 注册icon
import { registerIcon } from './global/index'

const app = createApp(App)
registerIcon(app)
app.use(store)
app.use(router)
app.mount('#app')
