//import './assets/main.css'

import { createApp } from "vue"
import App from "./App.vue"
import HomePage from './components/HomePage.vue'
import About from './components/AboutPage.vue'
import Writing from './components/Writings.vue'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  { path: '/', redirect: '/main'},
  { path: '/main', component: HomePage },
  { path: '/about', component: About},
  { path: '/writing', component: Writing }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
const app = createApp(App)
app.use(router)
app.mount('#app')

