<template>
  <div class="modal-container">
    <div class="logReg-modal">
      <div class="close_modal" @click="$emit('close')">
        <img src="../assets/xmark-solid.svg" alt="" />
      </div>
      <div class="logoContainer">
        <img src="../assets/companyIcon2.svg" alt="" />
        <p>TechStore</p>
      </div>
      <div class="logReg-modal-content">
        <div class="logReg-modal-content-buttons">
          <p
            v-on:click="loginFunc('login')"
            class="logReg-modal-content-buttons-btn"
            v-bind:class="loginV ? 'active' : ''"
          >
            Login
          </p>
          <p
            v-on:click="loginFunc('register')"
            class="logReg-modal-content-buttons-btn"
            v-bind:class="loginV ? '' : 'active'"
          >
            Register
          </p>
        </div>
        <div v-if="loginV" class="logReg-modal-login">
          <div class="alert-success" v-if="success">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"
              />
            </svg>
            <span> Account registered succesfuly!</span>
          </div>
          <div class="flex-reverse">
            <input v-model="emailLog" type="email" id="email" placeholder=" " />
            <label for="email">Email</label>
          </div>
          <div class="flex-reverse">
            <input
              v-model="passwordLog"
              type="password"
              id="password"
              placeholder=" "
            />
            <label for="password">Password</label>
          </div>
          <button v-on:click="login()">LOGIN</button>
        </div>
        <div v-if="!loginV" class="logReg-modal-register">
          <div class="flex-reverse">
            <input
              v-model="usernameReg"
              type="text"
              id="username"
              placeholder=" "
            />
            <label for="username">Username</label>
          </div>
          <div class="flex-reverse">
            <input v-model="emailReg" type="email" id="email" placeholder=" " />
            <label for="email">Email</label>
          </div>
          <div class="flex-reverse">
            <input
              v-model="passwordReg"
              type="password"
              id="password"
              placeholder=" "
            />
            <label for="password">Password</label>
          </div>
          <button v-on:click="register()">REGISTER</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: "LoginRegister",
  data() {
    return {
      success: false,
      loginV: true,
      emailLog: "",
      passwordLog: "",
      usernameReg: "",
      passwordReg: "",
      emailReg: "",
    };
  },
  methods: {
    ...mapActions({
      loginAuth: "auth/loginAuth",
    }),
    loginFunc(str) {
      if (str == "login") {
        this.loginV = true;
      } else if (str == "register") {
        this.loginV = false;
      }
    },
    login() {
      let data = {
        email: this.emailLog,
        password: this.passwordLog,
      };
      this.loginAuth(data).then(() => {
        this.$emit("close");
      });
    },
    register() {
      axios
        .post("/user/register", {
          username: this.usernameReg,
          password: this.passwordReg,
          role: "",
          email: this.emailReg,
        })
        .then((response) => {
          console.log(response);
          if (response.status == 201) {
            this.loginFunc("login");
            this.success = true;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #00000080;
}
.logReg-modal {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 400px;
  min-height: 500px;
  border-radius: 15px;
  padding: 50px 20px;
}
.close_modal {
  position: absolute;
  right: 15px;
  top: 15px;
  width: 23px;
  height: 23px;
  cursor: pointer;
}
.close_modal img {
  position: absolute;
  width: 100%;
  height: 100%;
}
.logoContainer {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 0 0 20px 0;
  width: 80%;
  margin: auto;
}
.logoContainer img {
  width: 40px;
}
.logoContainer p {
  margin: 0;
  margin-left: 15px;
  line-height: 1;
  font-size: 32px;
}
.logReg-modal-content {
  width: 80%;
  margin: 0 auto;
  padding: 20px 0 0 0;
  display: flex;
  flex-direction: column;
}
.logReg-modal-content-buttons {
  display: flex;
  justify-content: space-around;
  border-bottom: 2px solid #02cbdd;
  margin-bottom: 15px;
}
.logReg-modal-content-buttons-btn {
  position: relative;
  bottom: -2px;
  font-size: 18px;
  width: 110px;
  padding: 5px 0;
  margin: 0;
  text-align: center;
  border: 2px solid #02cbdd;
  background-color: #02cbdd;
  color: #fff;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
}
.logReg-modal-content-buttons-btn.active {
  background-color: #fff;
  color: #02cbdd;
}
.logReg-modal-content-buttons-btn.active::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 5px;
  bottom: -3px;
  background: #fff;
}
.flex-reverse {
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
}
.logReg-modal-content label {
  display: block;
  width: 100%;
  margin: 0 auto;
  font-size: 14px;
  padding: 0 12px;
  transform: translateY(28px);
  transition: transform 0.2s;
  cursor: text;
}
.logReg-modal-content input {
  display: block;
  width: 100%;
  margin: 0 auto;
  border-radius: 5px;
  outline: none;
  padding: 5px 10px;
  font-size: 14px;
  border: 2px solid #d3d3d3;
}
.logReg-modal-content input:focus + label {
  transform: translateY(0);
}
.logReg-modal-content input:not(:placeholder-shown) + label {
  transform: translateY(0);
}
.logReg-modal-content input#username {
  margin-bottom: 10px;
}
.logReg-modal-content button {
  display: block;
  margin: 30px auto 0 auto;
  width: 120px;
  padding: 10px;
  border: 2px solid transparent;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #02cbdd;
}
.logReg-modal-content button:hover {
  background-color: #09a9b8;
}
.logReg-modal-content button:active {
  color: #02cbdd;
  border: 2px solid #02cbdd;
  background-color: #fff;
}
.logReg-modal-login {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logReg-modal-login p {
  border: 2px solid #02cbdd;
  padding: 5px 20px;
  border-radius: 7px;
  border-bottom: none;
  position: relative;
}
.alert-success {
  width: 100%;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.alert-success svg {
  width: 16px;
  height: 16px;
  fill: #0f5132;
  position: relative;
  left: -11px;
}
</style>