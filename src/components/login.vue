<template>
  <!-- Page section -->
  <section class="footer-top-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="contact-form-warp">
            <h4 class="comment-title" style="color: white">Ninja Game Login</h4>
            <form class="comment-form" @submit.prevent="onSubmit()">
              <div class="row">
                <div class="col-md-12">
                  <input
                    type="text"
                    placeholder="Username..."
                    v-model="username"
                  />
                </div>
                <div class="col-md-12">
                  <input
                    type="text"
                    placeholder="Password..."
                    v-model="password"
                  />
                </div>
                <div class="col-lg-12">
                  <button class="site-btn btn-sm">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Page section end -->
</template>

<script>
import { LOGIN } from "../store/action.type";

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },

  methods: {
    onSubmit() {
      this.$store
        .dispatch(LOGIN, { username: this.username, password: this.password })
        .then(data => {
          this.username = "";
          this.password = "";
          console.log("data in method :", data);
        });
    }
  }
};
</script>

<style scoped></style>
