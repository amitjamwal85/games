<template>
  <!-- Footer section -->
  <footer class="footer-section">
    <div class="container">
      <ul class="footer-menu">
        <li>
          <a href=""><router-link to="/">Home</router-link></a>
        </li>
        <li>
          <a href=""><router-link to="/">Games</router-link></a>
        </li>
        <li>
          <a href=""><router-link to="/contact">Contact</router-link></a>
        </li>
        <li v-show="isAuthenticated">
          <a href="" @click="logout()">Logout</a>
        </li>
      </ul>
      <p class="copyright"></p>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
import { LOGOUT } from "../store/action.type";
export default {
  name: "foot",

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
