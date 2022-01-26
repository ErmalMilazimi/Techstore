<template>
  <div class="container">
    <h3 class="title">Disa nga produktet me te kerkuara</h3>
    <div class="products-container">
      <Products
        v-for="product in products"
        v-bind="product"
        v-bind:key="product.id"
      />
    </div>
  </div>
</template>

<script>
import Products from "@/components/Product.vue";

export default {
  name: "homeProducts",
  components: {
    Products,
  },
  props: {},
  data() {
    return {
      products: [
        {
          id: 1,
          title: "Apple iPhone 11 Pro Max 256GB Unlocked",
          content: `Looks like new at first glance. Very light signs of use such as
            small scratches. Battery Min 85%. OEM Original Apple Parts. 1 Year
            warranty`,
          imgSrc: "iphone11.png",
        },
        {
          id: 2,
          title: "Apple iPhone 11 Pro Max 256GB Unlocked",
          content: `Looks like new at first glance. Very light signs of use such as
            small scratches. Battery Min 85%. OEM Original Apple Parts. 1 Year
            warranty`,
          imgSrc: "iphone11.png",
        },
        {
          id: 2,
          title: "Apple iPhone 11 Pro Max 256GB Unlocked",
          content: `Looks like new at first glance. Very light signs of use such as
            small scratches. Battery Min 85%. OEM Original Apple Parts. 1 Year
            warranty`,
          imgSrc: "iphone11.png",
        },
        {
          id: 2,
          title: "Apple iPhone 11 Pro Max 256GB Unlocked",
          content: `Looks like new at first glance. Very light signs of use such as
            small scratches. Battery Min 85%. OEM Original Apple Parts. 1 Year
            warranty`,
          imgSrc: "iphone11.png",
        },
        {
          id: 2,
          title: "Apple iPhone 11 Pro Max 256GB Unlocked",
          content: `Looks like new at first glance. Very light signs of use such as
            small scratches. Battery Min 85%. OEM Original Apple Parts. 1 Year
            warranty`,
          imgSrc: "iphone11.png",
        },
        {
          id: 2,
          title: "Apple iPhone 11 Pro Max 256GB Unlocked",
          content: `Looks like new at first glance. Very light signs of use such as
            small scratches. Battery Min 85%. OEM Original Apple Parts. 1 Year
            warranty`,
          imgSrc: "iphone11.png",
        },
      ],
    };
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