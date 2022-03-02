import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/subscribe",
    name: "subscribe",
    component: () =>
      import(/* webpackChunkName: "subscribe" */ "../views/SubForm.vue"),
  },
  {
    path: "/thanks",
    name: "thanks",
    component: () =>
      import(/* webpackChunkName: "thanks" */ "../views/ThankYou.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
