<template>
  <div>
    <ItemList :renderList="renderList" :todoList="todoList"></ItemList>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import ItemList from "@/views/ItemList.vue";
@Component({
  components: {
    ItemList,
  },
})
export default class ClearPage extends Vue {
  @Prop() todoList!: any[];
  renderList: any[] = [];
  created() {
    this.renderList = this.todoList.filter((data) => data.status === "clear");
  }
}
</script>
