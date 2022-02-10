<template>
  <div class="modal-container" v-on:click="hideModal()">
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
          <p class="logReg-modal-content-buttons-btn">Login</p>
          <p class="logReg-modal-content-buttons-btn">Register</p>
        </div>
        <div v-if="login" class="logReg-modal-login">
          <div class="flex-reverse">
            <input type="text" id="username" placeholder=" " />
            <label for="username">Username</label>
          </div>
          <div class="flex-reverse">
            <input type="text" id="password" placeholder=" " />
            <label for="password">Password</label>
          </div>
          <button>LOGIN</button>
        </div>
        <div v-if="!login" class="logReg-modal-register">
          <div class="flex-reverse">
            <input type="text" id="username" placeholder=" " />
            <label for="username">Username</label>
          </div>
          <div class="flex-reverse">
            <input type="text" id="password" placeholder=" " />
            <label for="password">Password</label>
          </div>
          <button>LOGIN</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginRegister",
  data() {
    return {
      login: true,
    };
  },
  methods: {
    hideModal: function () {},
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
  color: #02cbdd;
  border-radius: 5px 5px 0 0;
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
</style>