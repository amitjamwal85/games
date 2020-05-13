import Vue from "vue";
import VueRouter from "vue-router";
import index from "../components/index.vue";
import contact from "../components/contact.vue";
import login from "../components/login.vue";
import covidstatewise from "../views/covidstatewise";
import graphql from "../views/graphql";
import map from "../views/map";
import fblogin from "../views/fblogin";


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
  },
  {
    path: "/covidstatewise",
    name: "covidstatewise",
    component: covidstatewise
  },
  {
    path: "/graphql",
    name: "graphql",
    component: graphql
  },
  {
    path: "/map",
    name: "map",
    component: map
  },
  {
    path: "/fblogin",
    name: "fblogin",
    component: fblogin
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
