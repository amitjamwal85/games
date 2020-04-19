<template>
  <div id="app">
    <heading></heading>
    <router-view></router-view>
    <footers></footers>
  </div>
</template>

<script>
import heading from "./components/heading.vue";
import footer from "./components/footer.vue";
// import { js_list } from "./loadJS";

export default {
  components: {
    heading: heading,
    footers: footer
  },

  /*mounted() {
    for (let i = 0; i < js_list.length; i++) {
      let set = document.createElement("script");
      set.setAttribute("src", js_list[i]);
      set.setAttribute("type", "javascript");
      console.log("loading script : " + js_list[i]);
      document.head.appendChild(set);
    }
  }*/

  created() {
    console.log("app created.....");
  }
};
</script>
