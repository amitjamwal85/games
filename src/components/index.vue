<template>
  <div>
    <slider></slider>
    <newsheadline></newsheadline>

    <!-- Review section -->
    <section class="footer-top-section">
      <div class="container">
        <div class="section-title">
          <div class="cata new">Action Games</div>
          <!--<h2>Recent Reviews</h2>-->
        </div>
        <div class="row">
          <div
            class="col-lg-3 col-md-6"
            v-for="game in action_games_get"
            :key="game.id"
          >
            <a
              :href="game.game_url"
              v-on:click.prevent="checkStatus(game.game_url)"
            >
              <div class="review-item">
                <div class="review-cover set-bg" :data-setbg="game.image_url">
                  <div class="score yellow">9.3</div>
                </div>
                <div class="review-text">
                  <h5 style="color: white">{{ game.name }}</h5>
                  <!--<p>
                    Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum
                    dolor sit ame.
                  </p>-->
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent game section  -->
    <section class="footer-top-section">
      <div class="container">
        <div class="section-title">
          <div class="cata new">Racing Games</div>
          <!--<h2>Recent Reviews</h2>-->
        </div>
        <div class="row">
          <div
            class="col-lg-3 col-md-6"
            v-for="game in sports_games_get"
            :key="game.id"
          >
            <a :href="game.game_url">
              <div class="review-item">
                <div class="review-cover set-bg" :data-setbg="game.image_url">
                  <div class="score yellow">9.3</div>
                </div>
                <div class="review-text">
                  <h5 style="color: white">{{ game.name }}</h5>
                  <!--<p>
                    Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum
                    dolor sit ame.
                  </p>-->
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- Recent game section end -->

    <!-- Review section -->
    <section class="footer-top-section">
      <div class="container">
        <div class="section-title">
          <div class="cata new">Racing Games</div>
          <!--<h2>Recent Reviews</h2>-->
        </div>
        <div class="row">
          <div
            class="col-lg-3 col-md-6"
            v-for="game in racing_games_get"
            :key="game.id"
          >
            <a :href="game.game_url">
              <div class="review-item">
                <div class="review-cover set-bg" :data-setbg="game.image_url">
                  <div class="score yellow">9.3</div>
                </div>
                <div class="review-text">
                  <h5 style="color: white">{{ game.name }}</h5>
                  <!--<p>
                    Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum
                    dolor sit ame.
                  </p>-->
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- Review section end -->
  </div>
</template>

<script>
import { GET_GAMES } from "../store/action.type";
import { mapGetters } from "vuex";
import store from "../store";
import $ from "jquery";
import newsheadline from "./newsheadline";
import slider from "./slider";

export default {
  components: {
    newsheadline,
    slider
  },

  data() {
    return {
      action_games: []
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log("calling action using dispatch");
    Promise.all([store.dispatch(GET_GAMES)])
      .then(data => {
        console.log("promise data:", data);
        next();
      })
      .catch(error => {
        console.log("promise error:", error);
      });

    /*store.dispatch(GET_GAMES).then((data) => {
        //debugger;
        console.log(data);
        next();
    })*/
  },

  methods: {
    checkStatus(game_url) {
      console.log("status....." + game_url);
      window.location.href = game_url;
    }
  },

  computed: {
    ...mapGetters(["action_games_get", "sports_games_get", "racing_games_get"])
  },

  beforeCreate() {
    setTimeout(() => {
      $(".news-ticker").marquee({
        duration: 20000,
        //gap in pixels between the tickers
        //gap: 200,
        delayBeforeStart: 0,
        direction: "left",
        duplicated: true
      });

      $(".set-bg").each(function() {
        var bg = $(this).data("setbg");
        $(this).css("background-image", "url(" + bg + ")");
      });

      $(".hero-slider").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        mouseDrag: false,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        items: 1,
        autoplay: true
      });
    }, 10);
  }
};
</script>

<style scoped></style>
