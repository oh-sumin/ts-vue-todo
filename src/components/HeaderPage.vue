<template>
  <div>
    <h1>!</h1>
    <router-link to="/">All</router-link>
    <router-link to="/active">Active</router-link>
    <router-link to="/clear">Clear</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HeaderPage extends Vue {}
</script>
