<template>
  <div class="product">
    <div class="imageContainer">
      <img :src="require(`../assets/products/${imgSrc}`)" alt="" />
    </div>
    <div class="textContainer">
      <h4 class="title">{{ title }}</h4>
      <p class="desc">
        {{ content }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Product",
  components: {},
  props: {
    title: String,
    content: String,
    imgSrc: String,
  },
};
</script>
<style scoped>
.product {
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
  width: 100%;
  height: 70%;
  overflow: hidden;
}
.imageContainer img {
  width: 100%;
  transform: scale(1);
  transition: transform 0.2s ease;
}
.product:hover .imageContainer img {
  transform: scale(1.2);
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