<template>
  <div class="contact-wrapper">
    <div
      class="
        contact-container
        container
        d-flex
        justify-content-around
        flex-wrap
      "
    >
      <div class="contact-title">
        <h1>Contact Us</h1>
      </div>
      <div class="py-4 form-container">
        <form id="contactForm">
          <div class="mb-3">
            <label class="form-label" for="name">Name</label>
            <input
              class="form-control"
              id="name"
              type="text"
              placeholder="Name"
              v-model="name"
            />
          </div>

          <div class="mb-3">
            <label class="form-label" for="emailAddress">Email Address</label>
            <input
              class="form-control"
              id="emailAddress"
              type="email"
              placeholder="Email Address"
              v-model="email"
            />
          </div>

          <div class="mb-3">
            <label class="form-label" for="message">Message</label>
            <textarea
              class="form-control"
              id="message"
              type="text"
              placeholder="Message"
              style="height: 10rem"
              v-model="message"
            ></textarea>
          </div>

          <div class="d-grid">
            <button
              class="btn btn-primary btn-lg"
              type="submit"
              @click.prevent="sendFeedback()"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div class="py-4 socialMedia-contianer">
        <div class="socialMedia-title"><h4>Social media platforms</h4></div>
        <div class="socialMedia-cards d-flex flex-column">
          <a
            class="d-flex align-items-center"
            href="www.facebook.com"
            target="_blank"
          >
            <i class="fab fa-facebook-square"></i>
            TechStore Kosova
          </a>
          <a
            class="d-flex align-items-center"
            href="www.instagram.com"
            target="_blank"
          >
            <i class="fab fa-instagram-square"></i>
            TechStore_Kosova
          </a>
          <a class="d-flex align-items-center" href="mailto:info@techstore.com">
            <i class="fas fa-envelope-square"></i>
            info@techstore.com
          </a>
          <a class="d-flex align-items-center" href="Tel:044000111">
            <i class="fas fa-phone-square-alt"></i>
            (383) 044 111 000
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "ContactCmp",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendFeedback() {
      let tmpObj = {
        name: this.name,
        email: this.email,
        message: this.message,
      };
      console.log(tmpObj);
      axios.post("/contact/addContacts", { body: tmpObj });
    },
  },
};
</script>
<style scoped>
.contact-wrapper {
  padding-top: 50px;
  padding-bottom: 50px;
}
.contact-container {
  padding: 25px 0;
  box-shadow: 0 0 10px 1px #aaa;
  border-radius: 10px;
}
.contact-title {
  width: 100%;
  text-align: center;
  margin: 0 0 0 50px;
}
.contact-title h1 {
  margin: 0;
  font-size: 34px;
}
.form-container,
.socialMedia-contianer {
  width: 350px;
}
.socialMedia-title {
  text-align: center;
  margin-bottom: 20px;
}
.socialMedia-cards a {
  padding: 0 20px;
  color: #333;
  text-decoration: none;
  font-size: 20px;
  margin: 10px 0;
}
.socialMedia-cards a i {
  font-size: 26px;
  margin-right: 10px;
}
</style>