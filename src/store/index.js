import Vue from "vue";
import Vuex from "vuex";
import game from "./games.module";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    game
  }
});
