<template>
  <div>
    <input type="text" v-model="message" />
    <div>{{ message }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class MessagePage extends Vue {
  message: string = "메세지를 입력하세요";
}
</script>
