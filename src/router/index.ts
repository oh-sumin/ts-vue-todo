import Vue from "vue";
import Router from "vue-router";
// import VueRouter, { RouteConfig } from "vue-router";
// import AllPage from "@/views/AllPage.vue";
// import ActivePage from "@/views/ActivePage.vue";
// import ClearPage from "@/views/ClearPage.vue";
import ItemList from "@/views/ItemList.vue";

Vue.use(Router);

// const routes: Array<RouteConfig> = [
//   {
//     path: "/",
//     name: "itemList",
//     component: ItemList,
//   },
//   {
//     path: "/active",
//     name: "active",
//     component: ActivePage,
//   },
//   {
//     path: "/clear",
//     name: "clear",
//     component: ClearPage,
//   },
// ];

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
