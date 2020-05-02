<template>
  <div>
    <!-- Page Preloder -->
    <div id="preloder">
      <div class="loader"></div>
    </div>

    <!-- Header section -->
    <header class="header-section">
      <div class="container">
        <!-- logo -->
        <a class="site-logo" href="index.html">
          <img src="img/logo.png" alt="" />
        </a>
        <div class="user-panel">
          <a href="#" v-show="!isAuthenticated"
            ><router-link to="/login">Login</router-link></a
          >
          <a href="" v-show="isAuthenticated" @click="logout()">Logout</a>
          <!--/<a href="#">Register</a>-->
        </div>
        <!-- responsive -->
        <div class="nav-switch">
          <i class="fa fa-bars"></i>
        </div>
        <!-- site menu -->
        <nav class="main-menu">
          <ul>
            <li>
              <a href=""><router-link to="/">Home</router-link></a>
            </li>
            <li>
              <a href=""><router-link to="/">Games</router-link></a>
            </li>
            <li>
              <a href=""><router-link to="/contact">Contact</router-link></a>
            </li>
            <li>
              <a href=""
                ><router-link to="/covidstatewise">Covid-19</router-link></a
              >
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <!-- Header section end -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { LOGOUT } from "../store/action.type";
export default {
  name: "heading",

  computed: {
    ...mapGetters(["isAuthenticated"])
  },

  methods: {
    logout() {
      this.$store.dispatch(LOGOUT).then(() => {
        this.$router.push({ name: "home" });
      });
    }
  }
};
</script>

<style scoped></style>
