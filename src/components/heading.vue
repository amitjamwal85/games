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
          <a href="#">Login</a>/<a href="#">Register</a>
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
          </ul>
        </nav>
      </div>
    </header>
    <!-- Header section end -->
  </div>
</template>

<script>
export default {
  name: "heading"
};
</script>

<style scoped></style>
