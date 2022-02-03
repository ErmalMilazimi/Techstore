<template>
  <Header secondHeader="secondHeader" backgroundUrl="secondBanner.jpg" />
  <Cart />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Cart from "@/components/Cart.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Cart,
    Footer,
  },
};
</script>
