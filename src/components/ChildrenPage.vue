<template>
  <div>
    <button @click="counter">up</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, Emit } from "vue-property-decorator";
@Component
export default class ChildrenPage extends Vue {
  //emit 다른 컴포넌트에 이벤트 전달, 자식 -> 부모 가능
  @Emit()
  counter() {
    console.log("실행 완");
  }
}
</script>
