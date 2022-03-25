<template>
  <Header secondHeader="secondHeader" backgroundUrl="secondBanner.jpg" />
  <div class="container productContainer">
    <div class="leftSide">
      <div class="mainImage">
        <img :src="`${bannerImage}`" alt="" />
      </div>
      <div class="smallerImgs-container">
        <div
          v-for="imgs in images"
          v-bind:key="imgs._id"
          class="smallerImgs-img"
          @click="changeBG(imgs)"
        >
          <img :src="imgs" alt="" />
        </div>
      </div>
    </div>
    <div class="rightSide">
      <h3 class="title">{{ title }}</h3>
      <p class="description">
        {{ description }}
      </p>
      <p class="price">{{ price }} €</p>
      <div class="buttonsContainer">
        <button class="buttonsContainer-btn" type="submit" id="addToCart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
  <div class="container relatedProducts">
    <h3 class="title">Produkte te ngjajshme</h3>
    <Products
      v-for="product in products"
      v-bind="product"
      v-bind:key="product.id"
    />
  </div>
  <Footer />
</template>

<script>
import axios from "axios";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import Products from "@/components/Product.vue";
export default {
  name: "Product",
  components: {
    Footer,
    Header,
    Products,
  },
  data() {
    return {
      products: [],
      singleProduct: undefined,
      productID: this.$route.params.id,
      bannerImage: undefined,
      images: [],
      title: "",
      description: "",
      price: "",
    };
  },
  watch: {
    $route() {
      this.productID = this.$route.params.id;
      this.updatePage();
    },
  },
  async created() {
    let result = await axios.get("http://localhost:4000/product");
    this.products = result.data;

    let result2 = await axios.get(
      "http://localhost:4000/product/" + this.productID
    );

    this.bannerImage = result2.data.images[0];
    this.images = result2.data.images;
    this.title = result2.data.title;
    this.description = result2.data.description;
    this.price = result2.data.price;
  },
  methods: {
    changeBG(bg) {
      this.bannerImage = bg;
    },
    async updatePage() {
      let result = await axios.get("http://localhost:4000/product");
      this.products = result.data;

      let result2 = await axios.get(
        "http://localhost:4000/product/" + this.productID
      );

      this.bannerImage = result2.data.images[0];
      this.images = result2.data.images;
      this.title = result2.data.title;
      this.description = result2.data.description;
      this.price = result2.data.price;
    },
  },
};
</script>
<style scoped>
.productContainer {
  padding: 50px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.leftSide,
.rightSide {
  width: 45%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
}
.mainImage {
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mainImage img {
  box-sizing: border-box;
  max-width: 100%;
  max-height: 100%;
}
.smallerImgs-container {
  margin: 20px auto 0 auto;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0 0 10px 1px #c4c4c4;
}
.smallerImgs-img {
  position: relative;
  width: 70px;
  height: 70px;
  box-shadow: none;
  background-color: #fff;
  transition: transform 0.1s, box-shadow 0.2s;
  cursor: pointer;
}
.smallerImgs-img:hover {
  box-shadow: 0 0 10px 1px #c4c4c4;
  transform: scale(1.1);
  z-index: 1;
}
.smallerImgs-img img {
  box-sizing: border-box;
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(1);
}
.relatedProducts {
  width: 100%;
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
}
.relatedProducts .title {
  width: 100%;
  margin-bottom: 30px;
}
.rightSide {
  margin-left: 20px;
  padding: 20px 20px 0 20px;
}
.rightSide .title {
  font-size: 36px;
}
.rightSide .description {
  font-size: 22px;
  margin: 30px 0;
}
.rightSide .price {
  margin: auto 10px 30px 10px;
  font-size: 26px;
}
.buttonsContainer {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}
.buttonsContainer-btn {
  padding: 10px 0;
  width: 200px;
  border-radius: 3px;
  border: none;
  margin: 10px;
  text-transform: uppercase;
  background-color: #02cbdd;
  border: 2px solid #02cbdd;
  color: #fff;
  display: block;
  transition: background-color 0.2s, color 0.2s;
}
.buttonsContainer-btn:hover {
  background-color: #fff;
  color: #02cbdd;
}
@media only screen and (max-width: 992px) {
  .leftSide,
  .rightSide {
    width: 100%;
    min-height: 400px;
  }
  .rightSide {
    margin-left: 0;
    margin-top: 50px;
  }
  .relatedProducts {
    justify-content: space-around;
  }
}
</style>