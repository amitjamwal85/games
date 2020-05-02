<template>
  <!-- Page section -->
  <section class="footer-top-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 mb-5 mb-lg-0">
          <h4 class="comment-title">Contact us</h4>
          <p>
            Genrosys Technologies Pvt. Ltd.
          </p>
          <div class="row">
            <div class="col-md-9">
              <ul class="contact-info-list">
                <li>
                  <div class="cf-left">Address</div>
                  <div class="cf-right">
                    E-195, Industrial Area, Phase 8-B, Mohali, Punjab, India
                  </div>
                </li>
                <li>
                  <div class="cf-left">Phone</div>
                  <div class="cf-right">+91 9988760120</div>
                </li>
                <li>
                  <div class="cf-left">E-mail</div>
                  <div class="cf-right">amitjamwal85@gmail.com</div>
                </li>
              </ul>
            </div>
          </div>
          <div class="social-links">
            <a href="#"><i class="fa fa-pinterest"></i></a>
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-dribbble"></i></a>
            <a href="#"><i class="fa fa-behance"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="contact-form-warp">
            <h4 class="comment-title">Leave a Reply</h4>
            <ul v-if="errors">
              <li v-for="(v, k) in errors" :key="k" style="color: #f44336">
                {{ k }} {{ v }}
              </li>
            </ul>
            <form class="comment-form">
              <div class="row">
                <div class="col-md-6">
                  <input
                    type="text"
                    placeholder="Name"
                    v-model="req_data.name"
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="email"
                    placeholder="Email"
                    v-model="req_data.email"
                  />
                </div>
                <div class="col-lg-12">
                  <input
                    type="text"
                    placeholder="Subject"
                    v-model="req_data.subject"
                  />
                  <textarea
                    placeholder="Message"
                    v-model="req_data.message"
                  ></textarea>
                  <button
                    class="site-btn btn-sm"
                    @click.prevent="saveContact()"
                  >
                    Send
                  </button>
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
import { CONTACT } from "../store/action.type";
import { CLEAR_VALUE } from "../store/mutations.type";
import { mapState } from "vuex";

export default {
  name: "login",
  data() {
    return {
      req_data: {
        name: "",
        email: "",
        subject: "",
        message: ""
      }
    };
  },

  methods: {
    saveContact() {
      this.$store.dispatch(CONTACT, this.req_data).then(data => {
        console.log("data is dispatch: ", data);
        this.req_data.name = "";
        this.req_data.email = "";
        this.req_data.subject = "";
        this.req_data.message = "";
        this.$store.commit(CLEAR_VALUE);
      });
    }
  },

  computed: {
    ...mapState({
      errors: state => state.contact.errors
    })
  }
};
</script>

<style scoped></style>
