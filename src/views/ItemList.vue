<template>
  <div>
    <ItemBox
      v-for="item in renderList"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :status="item.status"
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
  @Watch("$router")
  reRend(newRoute: string) {
    console.log(newRoute);
  }
  // created() {
  //   this.reRenderList(this.$route.params.status);
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

  // @Watch("$route.params.status")
  // routeUpdate(newValue: string) {
  //   this.reRenderList(newValue);
  // }

  // @Watch("$store.state.todoList", { deep: true })
  // routeUpdated() {
  //   this.reRenderList(this.$route.params.status);
  // }
}
</script>
