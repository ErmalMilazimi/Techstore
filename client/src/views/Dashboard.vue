<template>
  <Header secondHeader="secondHeader" backgroundUrl="secondBanner.jpg" />
  <DashboardCmp />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import DashboardCmp from "@/components/DashboardCmp.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    DashboardCmp,
  },
};
</script>
