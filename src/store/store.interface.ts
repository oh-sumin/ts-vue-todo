export interface Item {
  id: Number;
  title: String;
  status: "active" | "clear";
}

export interface State {
  todoList: Item[];
}
