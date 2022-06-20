import Vue from "vue";
import Vuex, { ActionContext, StoreOptions } from "vuex";

Vue.use(Vuex);

interface State {
  count: number;
}

const store: StoreOptions<State> = {
  state: {
    count: 0,
  },
  mutations: {
    setCount(state: State, count: number) {
      state.count = count;
    },
  },

  actions: {
    increase({ state, commit }: ActionContext<State, State>) {
      commit("setCount", state.count + 1);
    },
    decrease({ state, commit }: ActionContext<State, State>) {
      commit("setCount", state.count - 1);
    },
  },

  getters: {
    count: (state: State) => state.count,
  },
};

export default new Vuex.Store(store);

// export default new Vuex.Store({
//   // 상태값 -> 컴포넌트에서 사용하게 될 데이터
//   state: {},
//   //계산된 값을 반환하는 함수(ex.필터링)
//   getters: {},
//   // 상태변이 함수
//   mutations: {},
//   // 상태 변이를 위한 로직 함수
//   actions: {},
//   modules: {},
// });
