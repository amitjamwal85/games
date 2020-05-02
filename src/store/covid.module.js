import { GET_COVID_DATA } from "./action.type";
import { SET_COVID, SET_COVID_HEADER } from "./mutations.type";
import { ApiService } from "../common/api.service";
import { GET_COVID_URL } from "../common/config";

const state = {
  tableData: [],
  headerData: []
};

const mutations = {
  [SET_COVID](state, data) {
    state.tableData = data;
  },
  [SET_COVID_HEADER](state, data) {
    state.headerData = data;
  }
};

const getters = {
  get_covid_data(state) {
    return state.tableData;
  },
  get_covid_header(state) {
    return state.headerData;
  }
};

const actions = {
  async [GET_COVID_DATA](context) {
    const { data } = await ApiService.get(GET_COVID_URL);
    context.commit(SET_COVID, data.statewise.splice(1));
    context.commit(SET_COVID_HEADER, data.statewise.slice(0));
    return data;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
