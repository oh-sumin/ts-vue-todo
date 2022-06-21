<template>
  <div>
    <input
      type="checkbox"
      @change="checkStatus"
      :checked="status === 'clear'"
    />
    <input type="text" :value="title" />
    <button @click="deleteItem">X</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ItemView extends Vue {
  @Prop() readonly id!: number;
  @Prop() readonly title!: string;
  @Prop() readonly status!: "active" | "clear";

  checkStatus($event: Event) {
    const checked: boolean = $event.target.checked;

    if (checked) {
      this.$store.commit("changeStatus", { id: this.id, status: "clear" });
    } else {
      this.$store.commit("changeStatus", { id: this.id, status: "active" });
    }
  }

  deleteItem() {
    this.$store.commit("removeItem", this.id);
  }
}
</script>
