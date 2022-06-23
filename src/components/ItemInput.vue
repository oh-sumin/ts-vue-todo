<template>
  <div>
    <input
      class="add"
      type="text"
      placeholder="할 일을 입력하세요"
      v-model="title"
      @keyup.enter="addItem"
    />
    <router-view class="view" :todoList="todoList" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component({})
export default class ItemInput extends Vue {
  todoList: any[] = [];
  renderList: any[] = [];
  title: string = "";
  addItem() {
    this.todoList.push({
      id: this.todoList.length,
      title: this.title,
      status: "active",
    });
    this.title = "";
    console.log(this.todoList);
  }
}
</script>

<style>
.add {
  width: 200px;
  height: 30px;
}
</style>
