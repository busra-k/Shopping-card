import Vue from "vue";
import store from "./store";
import App from "./App.vue";
import 'bootstrap/dist/css/bootstrap.css'
import router from './router'

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount("#app");