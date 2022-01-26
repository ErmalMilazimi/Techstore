<template>
  <div class="footer">
    <div class="container">
      <div class="footer-up">
        <div>
          <img src="../assets/companyIcon2.svg" alt="" />
          <div class="footer-up-text">
            <h3>TechStore</h3>
            <p>Gjilan 60000, Kosove</p>
          </div>
        </div>
        <div class="contact">
          <a href="www.facebook.com" target="_blank">
            <i class="fab fa-facebook-square"></i>
          </a>
          <a href="www.instagram.com" target="_blank">
            <i class="fab fa-instagram-square"></i>
          </a>
          <a href="mailto:info@techstore.com">
            <i class="fas fa-envelope-square"></i>
          </a>
          <a href="Tel:044000111">
            <i class="fas fa-phone-square-alt"></i>
          </a>
        </div>
      </div>
      <hr />
      <div class="footer-down">
        <div class="footer-down-cards">
          <i class="fas fa-dollar-sign"></i>
          <h4>Great value</h4>
          <p>We offer competitive prices on over 100 million items.</p>
        </div>
        <div class="footer-down-cards">
          <i class="fas fa-truck"></i>
          <h4>Worldwide shopping</h4>
          <p>
            We ship to over 200 countries and regions, and our site comes in 12
            languages.
          </p>
        </div>
        <div class="footer-down-cards">
          <i class="far fa-credit-card"></i>
          <h4>Safe payment</h4>
          <p>Pay with the world’s most popular and secure payment methods.</p>
        </div>
        <div class="footer-down-cards">
          <i class="fas fa-shield-alt"></i>
          <h4>Shop with confidence</h4>
          <p>
            Our Buyer Protection policy covers your entire purchase journey.
          </p>
        </div>
        <div class="footer-down-cards">
          <i class="fas fa-users"></i>
          <h4>Help center</h4>
          <p>Round-the-clock assistance for a smooth shopping experience.</p>
        </div>
        <div class="footer-down-cards">
          <div>
            <i class="fab fa-android"></i>
            <i class="fab fa-apple"></i>
          </div>
          <h4>Shop better</h4>
          <p>
            Download the app for mobile-only features such as image search and
            discount games.
          </p>
        </div>
      </div>
      <hr />
      <div class="footer-copyright">
        <p>
          Të gjitha të drejtat janë të rezervuara ©
          <span class="copyRight">{{ new Date().getFullYear() }}</span>
          TechStore
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  props: {},
};
</script>
<style scoped>
.footer {
  background-color: #b2ffff;
  padding: 30px 0 0 0;
}
.footer-up {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 20px;
}
.footer-up > div {
  display: flex;
  align-items: flex-end;
}
.contact a {
  margin: 0 10px;
  font-size: 45px;
  color: inherit;
  transition: color 0.3s ease;
}
.contact a:hover {
  color: #2da4df;
}
.contact a:last-child {
  margin: 0 0 0 10px;
}
.footer-up img {
  width: 50px;
}
.footer-up-text {
  margin-left: 20px;
  position: relative;
  bottom: -5px;
}
.footer-up-text h3 {
  font-size: 33px;
  line-height: 1;
  margin: 0;
}
.footer-up-text p {
  margin: 0;
}
.footer-copyright {
  width: 100%;
  padding: 10px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer-down {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;
}
.footer-down-cards {
  text-align: center;
  width: 150px;
  transition: color 0.3s ease;
}
.footer-down-cards:hover,
.footer-down-cards:hover p {
  color: #2da4df;
}
.footer-down-cards i {
  font-size: 30px;
  margin: 20px 0;
}
.footer-down-cards > div > i:nth-child(1) {
  margin: 0 20px 0 0;
}
.footer-down-cards h4 {
  font-size: 14px;
  margin-bottom: 15px;
}
.footer-down-cards p {
  color: rgba(0, 0, 0, 0.7);
  font-size: 10px;
  transition: color 0.3s ease;
}

@media only screen and (max-width: 767px) {
  .footer-copyright p {
    font-size: 12px;
  }
  .footer-down-cards i {
    font-size: 24px;
  }
  .footer-down-cards h4 {
    font-size: 13px;
  }
  .footer-down-cards p {
    font-size: 9px;
  }
}
@media only screen and (max-width: 520px) {
  .footer-up {
    justify-content: center;
  }
}
</style>