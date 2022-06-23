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
import { Component, Vue, Watch } from "vue-property-decorator";
import ItemBox from "@/components/ItemBox.vue";
@Component({
  components: {
    ItemBox,
  },
})
export default class ItemList extends Vue {
  renderList: any[] = [];
  created() {
    // this.reRenderList(this.$router);
    console.log("created");
    console.log(this.$route);
  }

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
