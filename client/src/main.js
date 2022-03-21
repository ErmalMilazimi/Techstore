import store from "./store/index";
import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import router from "./router";

require("@/store/subscriber");

axios.defaults.baseURL = "http://localhost:4000";

store.dispatch("auth/attempt", localStorage.getItem("token")).then(() => {
  createApp(App).use(router).use(store).mount("#app");
});
