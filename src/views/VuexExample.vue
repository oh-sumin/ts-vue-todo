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
  created() {
    console.log(this.$store);
    this.$store.dispatch("moduleA/setRootData", "test");
  }
  increase() {
    this.$store.dispatch("increase");
    //dispatch : action 실행
  }
  decrease() {
    this.$store.dispatch("decrease");
  }
}
</script>
