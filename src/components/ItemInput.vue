<template>
  <div class="item">
    <input type="text" @keyup.enter="addItem" placeholder="할일을 입력하세요" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class ItemInput extends Vue {
  addItem() {
    console.log("enter");
  }
}
</script>
