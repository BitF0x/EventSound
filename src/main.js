import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import HeaderComponent from './components/HeaderComponent.vue'

import './assets/mainstyle.css'

const app = createApp(App)

app.component('HeadBar', HeaderComponent)

app.use(router)

app.mount('#app')
