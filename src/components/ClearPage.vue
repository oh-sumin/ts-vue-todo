<template>
  <div>
    <ItemList :renderList="clearList"></ItemList>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ItemList from "@/views/ItemList.vue";

@Component({
  components: {
    ItemList,
  },
})
export default class ClearPage extends Vue {
  @Prop() clearList!: any[];
}
</script>
