// import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
// import VueMask from 'v-mask'
import { VueMaskDirective } from 'v-mask'
// Vue.use(VueMask);
createApp(App)
.use(store)
.directive('mask', VueMaskDirective)
.mount('#app')
