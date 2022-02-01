<template>
  <div class="container productsContainer">
    <Product
      v-for="product in products"
      v-bind="product"
      v-bind:key="product._id"
    />
  </div>
</template>
<script>
import axios from "axios";
import Product from "@/components/Product.vue";
export default {
  name: "ProductList",
  components: {
    Product,
  },
  data() {
    return {
      products: [],
    };
  },
  async created() {
    let result = await axios.get("http://localhost:4000/product");
    this.products = result.data;
    console.log(this.products);
  },
};
</script>
<style scoped>
.productsContainer {
  padding: 50px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
}
</style>