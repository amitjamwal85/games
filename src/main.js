import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

window.$ = window.jQuery = require("jquery");
require("owl.carousel");
require("jquery.marquee");
require("bootstrap");

import LoadScript from "vue-plugin-load-script";
import { js_list } from "./loadJS";
Vue.use(LoadScript);
for (let i = 0; i < js_list.length; i++) {
  Vue.loadScript(js_list[i])
    .then(() => {
      console.log("loaded = " + js_list[i]);
    })
    .catch(() => {
      console.log("failed = " + js_list[i]);
    });
}

Vue.config.productionTip = false;

new Vue({
  //el: "#app",
  router,
  store,
  render: h => h(App)
}).$mount("#app");
