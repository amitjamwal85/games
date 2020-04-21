//import {SET_AUTH} from "./mutations.type";
import { LOGIN } from "./action.type";
import { ApiService } from "../common/api.service";

export const state = {};

export const mutations = {};

export const getters = {};

export const actions = {
  [LOGIN](context, credentials) {
    return new Promise(resolve => {
      ApiService.post("game/login/", credentials)
        .then(({ data }) => {
          console.log("token data:", data);
          resolve(data);
        })
        .catch(({ response }) => {
          console.log("error:", response.data.error);
        });
    });
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
