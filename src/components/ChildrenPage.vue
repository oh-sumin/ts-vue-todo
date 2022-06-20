<template>
  <div>
    <p>
      {{ alertMessage }}
    </p>
    {{ parentMessage }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
@Component
export default class ChildrenPage extends Vue {
  @Prop() parentMessage?: string;
  alertMessage: string = "";

  @Watch("parentMessage")
  update(value: string, oldValue: string) {
    this.alertMessage = "update message";
  }
}
</script>
