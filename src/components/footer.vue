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
      </ul>
      <p class="copyright"></p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "foot"
};
</script>

<style scoped></style>
