import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./style/style.css"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue3Toasity from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

createApp(App).use(
    Vue3Toasity,
    {
      autoClose: 3000,
      
    }
  ).use(store).use(router).mount('#app')
