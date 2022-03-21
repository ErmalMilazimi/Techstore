import { createStore } from "vuex";
import auth from "./auth";

const store = createStore({
  state: {
    patients: [],
  },
  mutations: {},
  actions: {},
  modules: {
    auth,
  },
});
export default store;
