import Vue from "vue";
import Vuex from "vuex";
import data from "./db.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: data,
    type: "game"
  },
  mutations: {},
  actions: {},
  getters: {
    projectType: state => {
      return state.data.filter(project => project.type === state.type);
    }
  }
});
