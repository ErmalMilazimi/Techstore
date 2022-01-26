<template>
  <Header secondHeader="secondHeader" backgroundUrl="secondBanner.jpg" />
  <Products />
  <Footer />
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import Products from "@/components/ProductList.vue";
export default {
  name: "ProductList",
  components: {
    Footer,
    Header,
    Products,
  },
};
</script>
