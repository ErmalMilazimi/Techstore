<template>
  <div
    v-on:click="cartActiveFunc"
    class="cart_layer"
    :class="cartActive ? 'active' : ''"
  >
    <div class="cartContainer" :class="cartActive ? 'active' : ''">
      <div class="title"><h3>Cart</h3></div>
      <hr />
      <div class="itemsContainer"></div>
      <hr class="second-hr" />
      <div class="cartFooter">
        <button class="buttonsContainer-btn" type="submit">Checkout</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cart",
  props: {
    isActive: Boolean,
  },
  data() {
    return {
      cartActive: false,
    };
  },
  methods: {
    cartActiveFunc: function () {
      if (this.isActive) {
        this.cartActive = true;
      } else {
        this.cartActive = false;
      }
    },
  },
};
</script>

<style scoped>
.cart_layer {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #00000021;
  z-index: 99999;
}
.cart_layer.active {
  display: block;
}
.cartContainer {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 400px;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #f4f4f4;
  padding: 20px;
  transform: translateX(110%);
  transition: transform 0.3s;
}
.cartContainer.active {
  transform: translateX(0);
}
.second-hr {
  margin-top: auto;
}
.cartFooter {
  display: flex;
  justify-content: center;
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
</style>