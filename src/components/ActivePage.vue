<template>
  <div>
    <div>active</div>
    <ItemList></ItemList>
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
export default class ActivePage extends Vue {
  @Prop() todoList!: any[];
}
</script>
