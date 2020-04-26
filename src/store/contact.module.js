import { SET_CONTACT, SET_ERRORS, CLEAR_VALUE } from "./mutations.type";
import { CONTACT } from "./action.type";
import { ApiService } from "../common/api.service";

const state = {
  errors: null,
  contact: {}
};

const mutations = {
  [SET_ERRORS](state, errors) {
    state.errors = errors;
  },

  [SET_CONTACT](state, data) {
    state.contact = data;
  },

    [CLEAR_VALUE](state){
      state.errors = null
    }
};

const getters = {};

const actions = {
  [CONTACT](context, req_data) {
    return new Promise(resolve => {
      ApiService.post("contact/", req_data)
        .then(({ data }) => {
          console.log("data:", data);
          context.commit(SET_CONTACT, data);
          resolve(data);
        })
        .catch(({ response }) => {
          console.log("errors:", response.data);
          context.commit(SET_ERRORS, response.data);
        });
    });
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
