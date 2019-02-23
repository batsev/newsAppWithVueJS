import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify";
import "./sass/main.sass";

// index.js or main.js
import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader

import store from './store'

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
