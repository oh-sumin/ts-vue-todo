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
      path: "/",
      name: "all",
      component: AllPage,
    },
    {
      path: "/active",
      name: "active",
      component: ActivePage,
    },
    {
      path: "/clear",
      name: "clear",
      component: ClearPage,
    },
  ],
});

export default router;
