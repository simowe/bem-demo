import { createApp } from 'vue'
import App from './App.vue'
import { avatar } from './mock/avatar'

createApp(App, {
  movie: avatar,
  // flipped: true,
  // inverted: true,
  // grayscale: true,
  // party: true,
}).mount('#app')
