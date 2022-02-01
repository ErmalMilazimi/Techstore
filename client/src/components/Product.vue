<template>
  <router-link class="product" :to="`/product/${_id}`">
    <div class="imageContainer">
      <img :src="`${images[0]}`" alt="" />
    </div>
    <div class="textContainer">
      <h4 class="title">{{ title }}</h4>
      <p class="desc">
        {{ description }}
      </p>
      <p>
        {{ price }}
      </p>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "Product",
  components: {},
  props: {
    _id: String,
    title: String,
    description: String,
    images: Array,
    price: Number,
    category: String,
  },
};
</script>
<style scoped>
.product {
  color: #000;
  text-decoration: none;
  width: 200px;
  height: 350px;
  display: flex;
  flex-direction: column;
  box-shadow: none;
  transition: box-shadow 0.2s ease;
  cursor: pointer;
  overflow: hidden;
}
.product:hover {
  box-shadow: 0 0 15px 0 #afafaf;
  z-index: 1;
}
.imageContainer {
  position: relative;
  width: 100%;
  height: 70%;
  overflow: hidden;
}
.imageContainer img {
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 100%;
  max-height: 100%;
  transform: translate(-50%, -50%) scale(1);
  transition: transform 0.2s ease;
}
.product:hover .imageContainer img {
  transform: translate(-50%, -50%) scale(1.2);
}
.textContainer {
  height: 22%;
  padding: 0 10px 10px 10px;
}
.textContainer h4 {
  font-size: 17px;
  height: 40px;
  overflow: hidden;
}
.textContainer p {
  font-size: 14px;
  margin: 0;
  margin-left: -3px;
  height: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: pre;
}

@media only screen and (max-width: 992px) {
  .product {
    width: 170px;
    height: 300px;
  }
}
@media only screen and (max-width: 560px) {
  .product {
    width: 140px;
    height: 250px;
  }
}
</style>