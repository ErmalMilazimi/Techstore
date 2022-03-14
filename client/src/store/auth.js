import axios from "axios";

export default {
  namespaced: true,
  state: {
    token: null,
    user: null,
  },
  mutations: {},
  actions: {
    async loginAuth(_, data) {
      let response = await axios.post("http://localhost:8080/user/login", data);

      console.log(response);
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
    },
  },
};
