<script setup lang="ts">
import CouponRow from '@/components/CouponRow/CouponRow.vue';
import PramienRow from '@/components/CouponRow/PramienRow.vue';
</script>

<template>
  <div class="alles">
    <div class="punkte-slider">
      <div class="verlauf-box">
        <div>Verlauf anzeigen</div>
      </div>
      <div class="slider-wrapper">
        <div class="slider-fill"></div>
        <div class="slider-dot"></div>
        <div class="slider-dot"></div>
        <div class="slider-dot"></div>
        <div class="slider-dot"></div>
        <div class="slider-dot"></div>
        <div class="slider-punkte" style="left: 3%;">0</div>
        <div class="slider-punkte" style="left: 20%;">200</div>
        <div class="slider-punkte" style="left: 40%;">400</div>
        <div class="slider-punkte" style="left: 60%;">600</div>
        <div class="slider-punkte" style="left: 80%;">800</div>
        <div class="slider-punkte" style="left: 97%;">1000</div>
        <div class="punkte-slider-circle"></div>
      </div>
    </div>
    <div class="standort-info">
      <img class="mcdelivery-marker"/>
      <div>Sie sehen, was bei Dillenburg, Kasseler Str. 34 zur Abholung verfügbar ist. <span class="text-link">Standort ändern</span></div>
    </div>
    <div class="pramien">
      <PramienRow />
    </div>
    <div class="Coupons">
      <CouponRow />
    </div>
    <div class="extra-punkte">

    </div>
    <div class="zum-qrcode">

    </div>
    <div class="couponcode">

    </div>
  </div>
</template>

<style scoped>
.standort-info {
  padding: 1vh 5vw;
  position: relative;
  height: 8vh;
  background-color: rgba(0, 0, 0, 0.04);
}
.standort-info div {
  padding-left: 8vw;
  font-size: 85%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.punkte-slider-circle {
  position: absolute;
  transform: translateX(-50%) translateY(-50%);
  left: 90%;
  top: 50%;
  height: 2.5vh;
  width: 2.5vh;
  border-radius: 50%;
  background-color: white;
  border: 1px solid red;
}
.slider-punkte {
  position: absolute;
  transform: translateX(-50%);
  left: 3%;
  top: 140%;
  font-size: 70%;
  font-weight: bold;
}
.verlauf-box {
  display: flex;
  justify-content: end;
  padding: 3vh 0;
}
.verlauf-box div {
  color: #2765ec;
  font-size: 82%;
  text-decoration: underline;
}
.slider-dot {
  height: 4px;
  width: 4px;
  position: absolute;
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  background-color: white;
  z-index: 9999;
  border-radius: 3px;
  left: 3%;
}
.slider-dot:nth-child(2) {
  left: 20%;
}
.slider-dot:nth-child(3) {
  left: 40%;
}
.slider-dot:nth-child(4) {
  left: 60%;
}
.slider-dot:nth-child(5) {
  left: 80%;
}
.slider-wrapper {
  width: 90vw;
  height: 1.6vh;
  border-radius: 5px;
  background-color: rgb(232, 232, 232);
  position: relative;
}
.slider-fill {
  border-radius: 5px;
  height: 100%;
  width: 90%;
  background-image: linear-gradient(to right, rgb(193, 0, 77), red, rgb(255, 187, 0));
}
.punkte-slider {
  padding: 0 5vw;
  height: 14vh;
  margin-top: -1vh;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
}
.alles {
  overflow-x: hidden;
  overflow-y: auto;
}
</style>