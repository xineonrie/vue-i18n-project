import './assets/main.css'
import 'ant-design-vue/dist/reset.css';

import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import router from './router'
import { i18n, initLocale, setLocale } from './i18n'

const app = createApp(App)

app.use(i18n)
app.use(Antd)
app.use(router)

// TODO: add ?lang=xx dynamic change on router

initLocale().then(() => {
    app.mount('#app')
  })
