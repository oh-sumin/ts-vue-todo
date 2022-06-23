<template>
  <div>
    <div>clear</div>
    <ItemList></ItemList>
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
  @Prop() clearList!: any[];
}
</script>
