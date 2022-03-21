import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ProductList from "../views/ProductList.vue";
import Product from "../views/Product.vue";
import About from "../views/About.vue";
import Cart from "../views/Cart.vue";
import Contact from "../views/Contact.vue";
import store from "../store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/productList",
    name: "ProductList",
    component: ProductList,
  },
  {
    path: "/product/:id",
    name: "Product",
    component: Product,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/AboutUs",
    name: "AboutUs",
    component: About,
  },
  {
    path: "/contactUs",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Contact,
    beforeEnter: (to, from, next) => {
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "",
        });
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
