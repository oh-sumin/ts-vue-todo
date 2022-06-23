<template>
  <div id="app">
    <HeaderPage></HeaderPage>
    <ItemInput></ItemInput>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeaderPage from "@/components/HeaderPage.vue";
import ItemInput from "@/components/ItemInput.vue";

@Component({
  components: {
    HeaderPage,
    ItemInput,
  },
})
export default class App extends Vue {}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.view {
  margin: 30px;
}
</style>
