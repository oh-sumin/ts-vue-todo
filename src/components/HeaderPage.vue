<template>
  <div>
    <div class="title">Todo List</div>
    <div class="link-box">
      <router-link class="link" to="{ name: 'all', query: { status: 'all'} }"
        >All</router-link
      >
      <router-link
        class="link"
        to="{ name: 'active', query: { status: 'active'} }"
        >Active</router-link
      >
      <router-link
        class="link"
        to="{ name: 'clear', query: { status: 'clear'} }"
        >Clear</router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HeaderPage extends Vue {}
</script>

<style>
.title {
  margin-top: 20px;
  font-size: 40px;
  font-weight: 600;
}

.link-box {
  margin: 30px;
}

.link {
  margin: 5px;
  font-size: 20px;
  text-decoration: none;
  color: black;
}

.router-link-exact-active {
  color: darkgreen;
  font-weight: 600;
  border-bottom: 2px solid darkgreen;
}
</style>
