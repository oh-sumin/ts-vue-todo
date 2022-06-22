<template>
  <div>
    <input
      class="add"
      type="text"
      placeholder="할 일을 입력하세요"
      v-model="title"
      @keyup.enter="addItem"
    />
    <router-view
      :todoList="todoList"
      :activeList="activeList"
      :clearList="clearList"
    ></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import ItemList from "@/views/ItemList.vue";

@Component({
  components: { ItemList },
})
export default class ItemInput extends Vue {
  todoList: any[] = [];
  activeList: any[] = [];
  clearList: any[] = [];
  title: string = "";
  addItem() {
    this.todoList.push({
      id: this.todoList.length,
      title: this.title,
      status: "active",
    });
    this.activeList = this.todoList.filter((data) => data.status === "active");
    this.clearList = this.todoList.filter((data) => data.status === "clear");
    this.title = "";
    console.log(this.activeList);
  }

  // filterAction() {
  //   this.activeList = this.todoList.filter((data) => data.status === "active");
  // }
}
</script>

<style>
.add {
  width: 200px;
  height: 30px;
}
</style>
