<template>
  <div class="header">
    <h1>Todo List</h1>
    <router-link to="/all">All</router-link>
    <router-link to="/active">Active</router-link>
    <router-link to="/clear">Clear</router-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class HeaderPage extends Vue {}
</script>
