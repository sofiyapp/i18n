import Vue from 'vue';
import App from './App.vue';
import i18n from 'vue-i18n'

Vue.config.productionTip=false;

new Vue ({
    render:h=> h(App)
}).$mount('#app');
