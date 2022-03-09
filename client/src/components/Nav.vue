<template>
  <nav class="navbar navbar-expand-lg navbar-light py-3 px-5" :class="active">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/"
        ><img
          src="../assets/companyIcon.svg"
          alt=""
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />
        TechStore
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/productList"
              >Products</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/AboutUs">About Us</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contactUs"
              >Contact Us</router-link
            >
          </li>
          <li class="nav-item">
            <div class="nav-link login" v-on:click="showModal = true">
              Login
            </div>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">
              <img class="cart-icon" src="../assets/cart.svg" alt="" />
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <LoginRegister @close="showModal = false" v-if="showModal" />
  </nav>
</template>
<script>
import LoginRegister from "./LoginRegister.vue";
export default {
  name: "Nav",
  props: {},
  components: {
    LoginRegister,
  },

  data() {
    return {
      active: "",
      LoginRegister: "LoginRegister",
      showModal: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 500) {
        this.active = "active";
      } else {
        this.active = "";
      }
    },
  },
};
</script>

<style scoped>
.navbar {
  position: absolute;
  top: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  transition: background-color 0.1s ease;
  z-index: 10;
}
.navbar.active {
  position: fixed;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 6px 20px 1px #0000001a;
}
.navbar:hover {
  background-color: rgba(255, 255, 255, 1);
}
.navbar-collapse {
  text-align: center;
}
.cart-icon {
  width: 25px;
  height: 25px;
  cursor: pointer;
}
.login {
  cursor: pointer;
}
</style>