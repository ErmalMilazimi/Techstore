<template>
  <Nav></Nav>
  <div class="header" :class="secondHeader">
    <img
      class="header-banner"
      :src="require(`@/assets/${backgroundUrl}`)"
      alt=""
    />
    <div class="hide">
      <div class="header-text-container">
        <h3 class="header-title">Mire se vini ne TechStore</h3>
        <p class="header-text">
          Ketu do gjeni me shume se 20,000 produkte teteknologjise me te fundit
          nga shume brende boterore. Shikoni me shume dhe mahnituni nga
          produktet tona.
        </p>
      </div>
      <div class="header-arrowContainer">
        <img
          @click="goto()"
          class="arrowIcon"
          src="../assets/arrowIcon.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
import Nav from "./Nav.vue";
export default {
  name: "Header",
  props: {
    secondHeader: String,
    backgroundUrl: String,
  },
  components: {
    Nav,
  },
  methods: {
    goto() {
      window.scrollTo(0, window.innerHeight);
    },
  },
};
</script>
<style scoped>
.header {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #b2ffff;
  padding-top: 72px;
  overflow: hidden;
}
.header.secondHeader {
  height: 50vh;
}
.header.secondHeader .hide {
  display: none;
}
.header .header-banner {
  width: 100%;
  min-width: 800px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%) scale(1);
  animation: animBannerText 0.5s linear;
}

.header.header.secondHeader .header-banner {
  top: -80px;
}
@keyframes animBannerText {
  0% {
    opacity: 0;
    transform: translateX(-50%) scale(1.5);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) scale(1);
  }
}
.header-text-container {
  position: absolute;
  bottom: 10vh;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  animation: animHeaderText 0.5s linear;
}
@keyframes animHeaderText {
  0% {
    opacity: 0;
    transform: translate(-50%, 150%) scale(0.7);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
.header-title {
  color: #002244;
  font-size: 45px;
}
.header-text {
  margin-top: 20px;
  font-size: 18px;
  color: #002244;
}
.header-arrowContainer {
  position: absolute;
  left: 50%;
  bottom: 30px;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header .arrowIcon {
  width: 50px;
  height: 50px;
  transform: translateY(0) rotate(-90deg);
  animation: animArrowIcon 1s linear infinite alternate;
  cursor: pointer;
}
.header .arrowIcon:hover {
  animation: none;
  transform: translateY(0) rotate(-90deg) scale(1.2);
}
@keyframes animArrowIcon {
  0% {
    transform: translateY(0) rotate(-90deg);
  }
  100% {
    transform: translateY(20px) rotate(-90deg);
  }
}

@media only screen and (max-width: 1024px) {
  .header-text-container {
    width: 80%;
  }
  .header-title {
    font-size: 30px;
  }
  .header-text {
    font-size: 14px;
  }
}
@media only screen and (max-width: 686px) {
  .header-text-container {
    bottom: 5vh;
  }
  .header-title {
    font-size: 24px;
  }
  .header-text {
    font-size: 13px;
  }
}
</style>