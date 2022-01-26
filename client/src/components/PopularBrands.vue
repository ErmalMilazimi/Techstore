<template>
  <div class="container">
    <h3 class="title">Eksploroni markat e njohura</h3>
    <div class="card-container">
      <div class="cards">
        <div class="card-imgContainer">
          <img src="../assets/iphone.png" alt="" />
        </div>
        <h4>Apple</h4>
      </div>
      <div class="cards">
        <div class="card-imgContainer">
          <img src="../assets/lenovo.png" alt="" />
        </div>
        <h4>Lenovo</h4>
      </div>
      <div class="cards">
        <div class="card-imgContainer">
          <img src="../assets/logi.png" alt="" />
        </div>
        <h4>Logitech</h4>
      </div>
      <div class="cards">
        <div class="card-imgContainer">
          <img src="../assets/samsung.png" alt="" />
        </div>
        <h4>Samsung</h4>
      </div>
      <div class="cards">
        <div class="card-imgContainer">
          <img src="../assets/ps5.png" alt="" />
        </div>
        <h4>Sony</h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PopularBrands",
};
let dummyData = [];
console.log(dummyData);
</script>
<style scoped>
.card-container {
  margin: 50px 0;
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  gap: 15px;
  min-height: 300px;
}
.cards {
  width: 180px;
}
.card-imgContainer {
  position: relative;
  width: inherit;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: none;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #40b4f7 0%, #8ed4cc 100%);
  transition: box-shadow 0.3s;
  cursor: pointer;
}
.card-imgContainer:hover {
  box-shadow: 0px 0px 40px #0093e9;
}
.cards img {
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -30%) scale(1);
  transition: transform 0.3s;
}
.card-imgContainer:hover img {
  transform: translate(-50%, -30%) scale(1.2);
}
h4 {
  margin-top: 30px;
  text-align: center;
}
@media only screen and (max-width: 767px) {
  .cards {
    width: 140px;
  }
  .card-imgContainer {
    height: 140px;
  }
}
</style>