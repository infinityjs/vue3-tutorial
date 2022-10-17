import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { variables } from '/@/lib/utils'

// console.log('this is a error no-undef: %d', app.count)
console.log('Environment VITE_PROJECT is %s', variables.getProject())
console.log('Environment VITE_PROJECT_NAME is %s', variables.getProjectName())
createApp(App).mount('#app')
