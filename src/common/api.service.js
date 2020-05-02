import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { GET_GAME_URL } from "./config";

Vue.use(VueAxios, axios);
// Vue.axios.defaults.baseURL = API_URL;

export const ApiService = {
  get(resource) {
    console.log("resource:" + resource);
    return axios.get(`${resource}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  post(resource, params) {
    return axios.post(`${resource}`, params);
  }
};

export const GameService = {
  get() {
    return ApiService.get(GET_GAME_URL);
  }
};
