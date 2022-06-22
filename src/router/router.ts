import Vue from "vue";
import Router from "vue-router";
import ItemList from "@/views/ItemList.vue";
import AllPage from "@/components/AllPage.vue";
import ActivePage from "@/components/ActivePage.vue";
import ClearPage from "@/components/ClearPage.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/all",
      name: "allList",
      component: AllPage,
    },
    {
      path: "/active",
      name: "activeList",
      component: ActivePage,
    },
    {
      path: "/clear",
      name: "activeList",
      component: ClearPage,
    },
  ],
});

export default router;
