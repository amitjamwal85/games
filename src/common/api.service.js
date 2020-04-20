import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { API_URL } from "./config";

Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = API_URL;

const ApiService = {
  get(resource) {
    console.log("resource:" + resource);
    return axios.get(`${resource}/`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
};

export default ApiService;

export const GameService = {
  get() {
    return ApiService.get("game");
  }
};
