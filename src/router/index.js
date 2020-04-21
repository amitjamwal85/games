import Vue from "vue";
import VueRouter from "vue-router";
import index from "../components/index.vue";
import contact from "../components/contact.vue";
import login from "../components/login.vue";

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
  },
  {
    path: "/login",
    name: "login",
    component: login
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;