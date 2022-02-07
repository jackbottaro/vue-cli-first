import Vue from "vue";
import App from "./App.vue";
import Jumbotron from "./components/Jumbotron.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
