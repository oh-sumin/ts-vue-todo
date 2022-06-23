<template>
  <div class="item-list">
    <input
      type="checkbox"
      @change="changeStatus"
      :checked="status === 'clear'"
    />
    <input class="content" type="text" :value="title" />
    <button class="remove-btn" @click="removeItem">X</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ItemBox extends Vue {
  @Prop() id!: number;
  @Prop() title!: string;
  @Prop() status!: string;
  @Prop() renderList!: any[];
  @Prop() todoList!: any[];
  changeStatus($event: Event) {
    const isCheck: boolean = ($event.target as HTMLInputElement).checked;
    console.log(isCheck);
    if (isCheck) {
      this.todoList[this.id].status = "clear";
    } else {
      this.todoList[this.id].status = "active";
    }
  }

  removeItem($event: Event) {
    console.log();
  }
}
</script>

<style>
.item-list {
  margin-bottom: 8px;
}

.content {
  margin-left: 10px;
  width: 200px;
  height: 30px;
  font-size: 20px;
}

.remove-btn {
  margin-left: 10px;
  width: 30px;
  height: 30px;
  background-color: black;
  color: white;
}
</style>

// ($event.target as HTMLInputElement).checked;
