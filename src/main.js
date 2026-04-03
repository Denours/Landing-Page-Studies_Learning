import { createApp } from 'vue'
import '@fontsource/outfit'
import './style.css'
import App from './App.vue'

// Import AOS for scroll animations
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.mount('#app')

// Initialize AOS
AOS.init({
  duration: 1000,
  easing: 'ease-out-cubic',
  once: true,
  offset: 100,
})
