import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { Item, State } from "@/store/store.interface";

Vue.use(Vuex);

const store: StoreOptions<State> = {
  state: {
    todoList: [
      { id: 0, title: "test", status: "active" },
      { id: 1, title: "wow", status: "clear" },
      { id: 2, title: "teeeest", status: "active" },
      { id: 3, title: "tesssst", status: "clear" },
      { id: 4, title: "testt", status: "active" },
    ],
  },
  mutations: {
    //add item
    addItem(state, item: Item) {
      state.todoList.push(item);
    },
    //change status
    changeStatus(
      state,
      { id, status }: { id: number; status: "active" | "clear" }
    ) {
      state.todoList[id].status = status;
    },
    //remove item
    removeItem(state, id: number) {
      state.todoList.splice(id, 1);
    },
  },
  getters: {
    allTodoList: (state) => state.todoList,
    activeTodoList: (state) => {
      return state.todoList
        .slice()
        .filter((item: Item) => item.status === "active");
    },
    clearTodoList: (state) => {
      return state.todoList.slice().filter((item: Item) => {
        item.status === "clear";
      });
    },
  },
};

export default new Vuex.Store(store);
