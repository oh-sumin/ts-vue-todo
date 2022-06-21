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
import { Component, Vue } from "vue-property-decorator";
import ItemBox from "@/components/ItemBox.vue";
@Component({
  components: {
    ItemBox,
  },
})
export default class ItemList extends Vue {
  renderList: any[] = this.$store.state.todoList;
}
</script>
