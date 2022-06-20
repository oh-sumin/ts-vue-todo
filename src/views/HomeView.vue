<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ChildrenPage @counter="counter"></ChildrenPage>
    <p>부모에서 숫자 보여주기 : {{ count }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ChildrenPage from "@/components/ChildrenPage.vue";

@Component({
  components: {
    ChildrenPage,
  },
})
export default class HomeView extends Vue {
  count: number = 0;

  counter() {
    this.count++;
  }
}
</script>
