import Vue from "vue";
import VueRouter from "vue-router";
import index from "../components/index.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: index
    //component: () => import("../components/index.vue")
  },
  {
    path: "/about",
    name: "About",
    component: About
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
