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
  @Prop() readonly id!: number;
  @Prop() readonly title!: string;
  @Prop() readonly status!: "active" | "clear";
  // @Prop() readonly renderList!: any[];
  // changeStatus($event: Event, renderList: any[], id: number) {
  //   const checked: boolean = ($event.target as HTMLInputElement).checked;
  //   if (checked) {
  //     this.renderList[id].status = "clear";
  //     //this.$store.commit("changeStatus", { id: this.id, status: "clear" });
  //   } else {
  //     this.renderList[id].status = "active";
  //     //this.$store.commit("changeStatus", { id: this.id, status: "active" });
  //   }
  // }

  // removeItem(renderList:any[], id : number) {
  //   this.$store.commit("removeItem", { id: this.id });
  // }

  changeStatus($event: Event) {
    const checked: boolean = ($event.target as HTMLInputElement).checked;
    console.log(checked);
  }

  removeItem() {}
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
