import store from "@/store";
import axios from "axios";

store.subscribe((mutation) => {
  switch (mutation.type) {
    case "auth/SET_TOKEN":
      if (mutation.payload) {
        axios.defaults.headers.common["Authorization"] = mutation.payload;
        localStorage.setItem("token", mutation.payload);
      } else {
        axios.defaults.headers.common["Authorization"] = "";
        localStorage.removeItem("token");
      }
      break;
    case "auth/SET_USER":
      break;
  }
});
