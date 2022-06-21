<template>
  <div>
    <input
      type="text"
      placeholder="할 일을 입력하세요"
      @keyup.enter="addItem"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ItemInput extends Vue {
  addItem($event: Event) {
    console.log($event);
  }
}
</script>
