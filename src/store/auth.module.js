import { SET_AUTH, SET_ERROR, DEL_AUTH } from "./mutations.type";
import { LOGIN, LOGOUT } from "./action.type";
import { ApiService } from "../common/api.service";
import tokenService from "../common/access.token";
import { GAME_LOGIN_URL } from "../common/config";

const state = {
  errors: null,
  isAuthenticated: !!tokenService.getToken(),
  user: {}
};

const mutations = {
  [SET_AUTH](state, user) {
    state.isAuthenticated = true;
    state.user = user;
    tokenService.saveToken(state.user.token);
  },

  [SET_ERROR](state, errors) {
    console.log("SET_ERROR1:", errors);
    state.errors = errors;
    console.log("SET_ERROR2:", errors);
  },

  [DEL_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = null;
    tokenService.destroyToken();
  }
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {
  [LOGIN](context, credentials) {
    return new Promise(resolve => {
      ApiService.post(GAME_LOGIN_URL, credentials)
        .then(({ data }) => {
          console.log("token data:", data);
          context.commit(SET_AUTH, data);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.error);
          console.log("error:", response.data.error);
        });
    });
  },

  [LOGOUT](context) {
    context.commit(DEL_AUTH);
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
