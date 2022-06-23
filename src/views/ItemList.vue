<template>
  <div>
    <ItemBox
      v-for="item in renderList"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :status="item.status"
      :renderList="renderList"
      :todoList="todoList"
    ></ItemBox>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import ItemBox from "@/components/ItemBox.vue";
@Component({
  components: {
    ItemBox,
  },
})
export default class ItemList extends Vue {
  @Prop() renderList!: any[];
  @Prop() todoList!: any[];

  //renderList: any[] = [];

  //   reRenderList(status: string) {
  //     if (status === "active") {
  //       this.renderList = this.$store.getters.activeTodoList;
  //     } else if (status === "clear") {
  //       this.renderList = this.$store.getters.clearTodoList;
  //     } else if (status === "") {
  //       console.log("wow");
  //       this.renderList = this.$store.getters.allTodoList;
  //     }
  //   }

  //   @Watch("$route")
  //   routeUpdate(newValue: string) {
  //     this.reRenderList(newValue);
  //     console.log(this.$router);
  //   }

  //   @Watch("$store.state.todoList", { deep: true })
  //   routeUpdated() {
  //     this.reRenderList(this.$route.params.status);
  //   }
}
</script>
