import Vue from 'vue/dist/vue.esm'
import App from './components/App.vue'

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '[data-behavior="vue"]',
    components: {App}
  });
});