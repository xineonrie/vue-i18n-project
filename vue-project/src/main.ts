import './assets/main.css'
import 'ant-design-vue/dist/reset.css';

import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import router from './router'
import {store,key} from './store';
import { i18n } from './i18n/index.ts'

async function bootstrap() {
  await store.dispatch('i18n/initLocale')
  createApp(App).use(store as unknown as any).use(i18n).use(router).use(Antd).mount('#app') // TODO: Fix type
}
bootstrap()
