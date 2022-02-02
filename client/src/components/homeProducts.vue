<template>
  <div class="container">
    <h3 class="title">Disa nga produktet me te kerkuara</h3>
    <div class="products-container">
      <Products
        v-for="product in products"
        v-bind="product"
        v-bind:key="product._id"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Products from "@/components/Product.vue";

export default {
  name: "homeProducts",
  components: {
    Products,
  },
  props: {},
  data() {
    return {
      products: [],
    };
  },
  async created() {
    let result = await axios.get("http://localhost:4000/product");
    this.products = result.data;
  },
};
</script>
<style scoped>
.products-container {
  width: 100%;
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 15px;
}
</style>