<template>
  <div class="vuex">
    <CountBox></CountBox>
    <button @click="increase">증가</button>
    <button @click="decrease">감소</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CountBox from "@/components/CountBox.vue";

@Component({
  components: {
    CountBox,
  },
})
export default class VuexExample extends Vue {
  increase() {
    this.$store.dispatch("increase");
  }
  decrease() {
    this.$store.dispatch("decrease");
  }
}
</script>
