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
      class="view"
      :todoList="todoList"
      :activeList="activeList"
      :clearList="clearList"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState } from "vuex";

@Component({
  computed: mapState(["todoList"]),
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
  // title: string = "";
  // addItem() {
  //   this.$store.commit("addItem", {
  //     id: this.$store.state.todoList.length,
  //     title: this.title,
  //     status: "active",
  //   });
  //   this.title = "";
  // }
}
</script>

<style>
.add {
  width: 200px;
  height: 30px;
}
</style>
