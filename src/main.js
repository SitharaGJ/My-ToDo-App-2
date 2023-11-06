import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Buefy from 'buefy'; // Import Buefy

import 'buefy/dist/buefy.css';

Vue.use(Buefy); // Register Buefy as a Vue plugin

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
