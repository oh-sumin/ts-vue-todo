<template>
  <div>
    <input
      type="text"
      placeholder="할 일을 입력하세요"
      v-model="title"
      @keyup.enter="addItem"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState } from "vuex";

@Component({
  computed: mapState(["todoList"]),
})
export default class ItemInput extends Vue {
  title: string = "";
  addItem() {
    this.$store.commit("addItem", {
      id: this.$store.state.todoList.length,
      title: this.title,
      status: "active",
    });
  }
}
</script>
