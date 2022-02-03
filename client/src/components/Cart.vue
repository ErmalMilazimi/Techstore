<template>
  <div class="cart_page container">
    <h2 class="page_title">My Cart</h2>

    <div class="cart_container">
      <div class="cart_container-products">
        <div
          v-for="product in products"
          v-bind:key="product._id"
          class="cart_container-product"
        >
          <div class="cart_container-product-image">
            <img :src="`${product.image}`" alt="" />
          </div>
          <div class="cart_container-product-text">
            <p class="title">{{ product.title }}</p>
            <p class="description">{{ product.description }}</p>
            <p class="price">{{ product.price }}€</p>
          </div>

          <div class="deleteProduct">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="trash"
              class="svg-inline--fa fa-trash fa-w-14"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="#000"
                d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"
              ></path>
            </svg>
          </div>
          <hr />
        </div>
      </div>
      <div class="cart_container-payment">
        <p class="total">Total: 1250.00€</p>
        <hr />
        <button>BUY NOW</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cart",
  data() {
    return {
      products: [
        {
          image:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pink-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1629842709000",
          title: "Iphone 13",
          description: "Description Iphone 13",
          price: "999",
        },
        {
          image:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pink-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1629842709000",
          title: "Iphone 13",
          description: "Description Iphone 13",
          price: "999",
        },
        {
          image:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pink-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1629842709000",
          title: "Iphone 13",
          description: "Description Iphone 13",
          price: "999",
        },
        {
          image:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pink-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1629842709000",
          title: "Iphone 13",
          description: "Description Iphone 13",
          price: "999",
        },
        {
          image:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pink-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1629842709000",
          title: "Iphone 13",
          description: "Description Iphone 13",
          price: "999",
        },
        {
          image:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pink-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1629842709000",
          title: "Iphone 13",
          description: "Description Iphone 13",
          price: "999",
        },
        {
          image:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pink-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1629842709000",
          title: "Iphone 13",
          description: "Description Iphone 13",
          price: "999",
        },
      ],
    };
  },
};
</script>

<style scoped>
.page_title {
  text-align: center;
  margin-top: 50px;
}
.cart_container {
  margin: 50px 0;
  display: flex;
  justify-content: center;
}
.cart_container-products {
  margin-right: 30px;
  max-width: 600px;
  width: 100%;
}
.cart_container-product {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  min-height: 200px;
}
.cart_container-product hr {
  width: 100%;
}
.cart_container-product:last-of-type hr {
  display: none;
}
.deleteProduct {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 15px;
  height: 15px;
  cursor: pointer;
}
.deleteProduct svg {
  width: 100%;
}
.deleteProduct svg path {
  fill: rgb(92, 92, 92);
}
.cart_container-product-image {
  height: inherit;
  width: 200px;
}
.cart_container-product-image img {
  max-height: 100%;
  max-width: 100%;
}
.cart_container-product-text {
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.cart_container-product-text p {
  margin: 0;
}
.cart_container-product-text .title {
  font-size: 24px;
}
.cart_container-product-text .description {
  margin: 10px 0;
  font-size: 14px;
}
.cart_container-product-text .price {
  margin-top: auto;
  color: #810505;
  font-size: 14px;
}
.cart_container-payment {
  border-radius: 3px;
  padding: 20px;
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
}
.cart_container-payment .total {
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
}
.cart_container-payment button {
  margin: 0 auto;
  margin-top: 20px;
  padding: 10px 0;
  width: 200px;
  border-radius: 3px;
  border: none;
  text-transform: uppercase;
  background-color: #02cbdd;
  border: 2px solid #02cbdd;
  color: #fff;
  display: block;
  transition: background-color 0.2s, color 0.2s;
}
.cart_container-payment button:hover {
  background-color: #fff;
  color: #02cbdd;
}
</style>