<template>
  <div>
    <ItemView
      v-for="item in renderList"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :status="item.status"
    ></ItemView>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import ItemView from "@/components/ItemView.vue";
import { mapGetters } from "vuex";

@Component({
  components: {
    ItemView,
  },
  computed: {
    ...mapGetters(["allTodoList", "activeTodoList", "clearTodoList"]),
  },
})
export default class ItemList extends Vue {
  renderList: any[] = [];

  created() {
    this.initRenderList(this.$route.params.status);
  }

  initRenderList(status: "active" | "clear") {
    if (!status) {
      this.renderList = this.$store.getters.allTodoList;
    } else if (status === "active") {
      this.renderList = this.$store.getters.activeTodoList;
    } else if (status === "clear") {
      this.renderList = this.$store.getters.clearTodoList;
    }
  }
  @Watch("$store.state.todoList")
  routeUpdate(newValue: "active" | "clear") {
    this.initRenderList(newValue);
  }
}
</script>
