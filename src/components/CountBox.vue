<template>
  <h3>{{ $store.state.count }}</h3>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

export default class CountBox extends Vue {}
</script>
