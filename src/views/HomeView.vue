<template>
  <div class="home">
    <ChildrenPage></ChildrenPage>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import ChildrenPage from "@/components/ChildrenPage.vue";

@Component({
  components: {
    ChildrenPage,
  },
})
export default class HomeView extends Vue {
  @Provide("message") msg: string = "provide/inject example";
}
</script>
