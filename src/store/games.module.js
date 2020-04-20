import { GET_GAMES } from "./action.type";
import { SET_GAMES } from "./mutations.type";
import { GameService } from "../common/api.service";

export const state = {
  action_games: [],
  sports_games: [],
  racing_games: []
};

export const mutations = {
  [SET_GAMES]: (state, games) => {
    state.action_games = games.action;
    state.sports_games = games.sports;
    state.racing_games = games.racing;
  }
};

export const actions = {
  async [GET_GAMES](context, articleSlug) {
    const { data } = await GameService.get(articleSlug);
    context.commit(SET_GAMES, data);
    return data;
  }
};

export const getters = {
  action_games_get(state) {
    return state.action_games;
  },
  sports_games_get(state) {
    return state.sports_games;
  },
  racing_games_get(state) {
    return state.racing_games;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
