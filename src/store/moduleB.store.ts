import { RootState } from "./store";
import { Module } from "vuex";

interface moduleB {
  data: string;
}

const module: Module<moduleB, RootState> = {
  state: {
    data: "moduleB",
  },
  mutations: {
    setData(state, data: string) {
      state.data = data;
    },
  },

  actions: {
    setRootData({ commit }, data: string) {
      commit("setData", data);
      //commit : mutate 실행
    },
  },

  getters: {
    data: (state) => state.data,
  },
};

export default module;
