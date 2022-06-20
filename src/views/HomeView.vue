<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ChildrenPage :parentMessage="message"></ChildrenPage>
    <button @click="changeMessage">change</button>
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
  message: string = "hihi";

  changeMessage() {
    this.message = " change";
    console.log("hi");
  }
}
</script>
