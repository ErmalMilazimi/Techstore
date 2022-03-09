<template>
  <Header secondHeader="secondHeader" backgroundUrl="contactUs-banner.jpg" />
  <ContactCmp />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import ContactCmp from "@/components/ContactCmp.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Contact",
  components: {
    Header,
    ContactCmp,
    Footer,
  },
};
</script>
