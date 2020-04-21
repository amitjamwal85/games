import Vue from "vue";
import Vuex from "vuex";
import game from "./games.module";
import auth from "./auth.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    game,
    auth
  }
});