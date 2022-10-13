import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

console.log('this is a error no-undef: %d', app.count)
createApp(App).mount('#app')
