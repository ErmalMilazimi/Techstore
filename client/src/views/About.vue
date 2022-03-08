<template>
  <Header secondHeader="secondHeader" backgroundUrl="secondBanner.jpg" />
  <AboutUsHome />
  <AboutUsCmp />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import AboutUsHome from "@/components/AboutUsHome.vue";
import Footer from "@/components/Footer.vue";
import AboutUsCmp from "../components/AboutUsCmp.vue";
export default {
  name: "Home",
  components: {
    Header,
    AboutUsHome,
    Footer,
    AboutUsCmp,
  },
};
</script>
