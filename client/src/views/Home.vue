<template>
  <Header backgroundUrl="banner1.png" />
  <AboutUsHome />
  <!-- <PopularBrands /> -->
  <HomeProducts />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import AboutUsHome from "@/components/AboutUsHome.vue";
// import PopularBrands from "@/components/PopularBrands.vue";
import Footer from "@/components/Footer.vue";
import HomeProducts from "@/components/homeProducts.vue";
export default {
  name: "Home",
  components: {
    Header,
    AboutUsHome,
    HomeProducts,
    Footer,
  },
};
</script>
