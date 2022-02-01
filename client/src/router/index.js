import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ProductList from "../views/ProductList.vue";
import Product from "../views/Product.vue";
import About from "../views/About.vue";

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
    path: "/AboutUs",
    name: "AboutUs",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
