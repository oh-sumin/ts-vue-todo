<template>
  <input type="checkbox" :checked="checked" @change="change" />
</template>

<script lang="ts">
import { Component, Vue, Model, Emit } from "vue-property-decorator";

@Component
export default class MyCheckbox extends Vue {
  @Model("change", { type: Boolean }) readonly checked!: boolean;

  @Emit()
  change(event: Event) {
    return console.log(event);
  }
}
</script>
