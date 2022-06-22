<template>
  <div>
    <ItemList :renderList="activeList"></ItemList>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import ItemList from "@/views/ItemList.vue";

@Component({
  components: {
    ItemList,
  },
})
export default class ActivePage extends Vue {
  @Prop() activeList!: any[];

  // reRenderList(status : string) {
  //     if(status === "active")
  // }
  // reRenderList(status: string) {
  //   if (status === "active") {
  //     this.renderList = this.$store.getters.activeTodoList;
  //   } else if (status === "clear") {
  //     this.renderList = this.$store.getters.clearTodoList;
  //   } else if (status === "") {
  //     console.log("wow");
  //     this.renderList = this.$store.getters.allTodoList;
  //   }
  // }

  //   @Watch("this.todoList") {
  //     console.log("aaa")
  //   }

  //   beforeCreate() {

  //   },
  //   updateList(todoList: any) {
  //     reRenderList
  //   }

  //   created() {
  //     this.renderList = this.todoList.filter((data) => data.status === "active");
  //     console.log(this.renderList);
  //   }

  //   renderList: any[] = this.todoList.filter((data) => data.status === "active");
}
</script>
