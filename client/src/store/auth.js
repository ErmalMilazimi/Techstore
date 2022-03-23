import axios from "axios";

export default {
  namespaced: true,
  state: {
    token: null,
    user: null,
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USER(state, data) {
      state.user = data;
    },
  },
  getters: {
    authenticated(state) {
      return state.token && state.user;
    },
    user(state) {
      return state.user;
    },
  },
  actions: {
    async loginAuth({ dispatch }, data) {
      let response = await axios.post("/user/login", data);

      dispatch("attempt", response.data.token);
    },

    async attempt({ commit, state }, token) {
      if (token) {
        commit("SET_TOKEN", token);
      }

      if (!state.token) {
        return;
      }

      try {
        let response = await axios.get("/user/current", token);
        commit("SET_USER", response.data);
      } catch (e) {
        commit("SET_TOKEN", null);
        commit("SET_USER", null);
      }
    },

    signOut({ commit }) {
      commit("SET_TOKEN", null);
      commit("SET_USER", null);
    },
  },
};
