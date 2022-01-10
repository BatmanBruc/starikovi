import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import Vue3TouchEvents from "vue3-touch-events";

createApp(App).use(Antd).use(Vue3TouchEvents).mount('#app')
 