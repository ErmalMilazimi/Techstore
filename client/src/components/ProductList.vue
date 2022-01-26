<template>
  <div class="container productsContainer">
    <Product
      v-for="product in products"
      v-bind="product"
      v-bind:key="product.id"
    />
  </div>
</template>
<script>
import Product from "@/components/Product.vue";
export default {
  name: "ProductList",
  components: {
    Product,
  },
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
.productsContainer {
  padding: 50px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
}
</style>