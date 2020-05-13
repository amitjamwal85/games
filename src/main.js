import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { ClientTable } from "vue-tables-2";
import VueGeolocation from "vue-browser-geolocation";

window.$ = window.jQuery = require("jquery");
require("owl.carousel");
require("jquery.marquee");
require("bootstrap");
require("datatables.net-bs4");

Vue.use(ClientTable);
Vue.use(VueGeolocation);

import LoadScript from "vue-plugin-load-script";
import { js_list } from "./loadJS";
import { createProvider } from "./vue-apollo";
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
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount("#app");
