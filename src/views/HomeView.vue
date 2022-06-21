<template>
  <div class="home">
    <h3>동의???</h3>
    <MyCheckbox v-model="checked" @change="change"></MyCheckbox>
    {{ text }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import MyCheckbox from "@/components/MyCheckbox.vue";

@Component({
  components: {
    MyCheckbox,
  },
})
export default class HomeView extends Vue {
  checked: boolean = false;
  text: string = "비동의";

  // change(checked: boolean) {
  //   this.checked = checked;
  //   this.text = checked ? "동의" : "비동의";
  // }

  change(checked: boolean) {
    this.checked = checked;
    this.text = this.checked ? "동의" : "비동의";
  }
}
</script>
