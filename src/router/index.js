import Vue from "vue";
import VueRouter from "vue-router";
import index from "../components/index.vue";
import contact from "../components/contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: index
    //component: () => import("../components/index.vue")
  },
  {
    path: "/contact",
    name: "contact",
    component: contact
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
