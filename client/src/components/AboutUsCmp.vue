<template>
  <div class="container aboutUsView-container">
    <div class="aboutUsView-title">Our greatest achievements</div>
    <div
      class="
        aboutUsView
        d-flex
        justify-content-around
        align-items-baseline
        flex-wrap
      "
    >
      <div class="aboutUsView-cards">
        <i class="fas fa-dollar-sign"></i>
        <h4>Great value</h4>
        <p>We offer competitive prices on over 100 million items.</p>
      </div>
      <div class="aboutUsView-cards">
        <i class="fas fa-truck"></i>
        <h4>Worldwide shopping</h4>
        <p>
          We ship to over 200 countries and regions, and our site comes in 12
          languages.
        </p>
      </div>
      <div class="aboutUsView-cards">
        <i class="far fa-credit-card"></i>
        <h4>Safe payment</h4>
        <p>Pay with the world’s most popular and secure payment methods.</p>
      </div>
      <div class="aboutUsView-cards">
        <i class="fas fa-shield-alt"></i>
        <h4>Shop with confidence</h4>
        <p>Our Buyer Protection policy covers your entire purchase journey.</p>
      </div>
      <div class="aboutUsView-cards">
        <i class="fas fa-users"></i>
        <h4>Help center</h4>
        <p>Round-the-clock assistance for a smooth shopping experience.</p>
      </div>
      <div class="aboutUsView-cards">
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
  </div>
</template>
<script>
export default {
  name: "AbutUsCmp",
};
</script>
<style scoped>
.aboutUsView-container {
  padding: 50px 0;
}
.aboutUsView-title {
  text-align: center;
  font-size: 26px;
  margin: 0 0 50px 0;
}
.aboutUsView-cards {
  width: 200px;
  text-align: center;
  margin: 10px;
  color: #333;
  transition: color 0.2s;
}
.aboutUsView-cards:hover {
  color: #2da4df;
}
.aboutUsView-cards.active {
  color: #2da4df;
}
.aboutUsView-cards i {
  font-size: 36px;
  margin-bottom: 20px;
}
.aboutUsView-cards h4 {
  font-size: 18px;
}
.aboutUsView-cards p {
  font-size: 14px;
}
</style>
