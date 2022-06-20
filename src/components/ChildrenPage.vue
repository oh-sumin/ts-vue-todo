<template>
  <div>
    {{ message }}
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Watch,
  Emit,
  Inject,
} from "vue-property-decorator";
@Component
export default class ChildrenPage extends Vue {
  //emit 다른 컴포넌트에 이벤트 전달, 자식 -> 부모 가능
  @Inject() message?: string;
}
</script>
