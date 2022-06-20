import { StoreOptions } from "vuex";
import Vue from "vue";
import Vuex from "vuex";
import moduleA from "@/store/moduleA.store";
import moduleB from "@/store/moduleB.store";

Vue.use(Vuex);

export interface RootState {
  data: string;
}

const store: StoreOptions<RootState> = {
  modules: {
    moduleA,
    moduleB,
  },
  state: {
    data: "root",
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

export default new Vuex.Store(store);
