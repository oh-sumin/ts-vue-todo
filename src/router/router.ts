import Vue from "vue";
import Router from "vue-router";
import ItemList from "@/views/ItemList.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/:status",
      name: "itemList",
      component: ItemList,
    },
  ],
});

export default router;
