<script setup lang="ts">
import CouponRow from '@/components/CouponRow/CouponRow.vue';
import PramienRow from '@/components/CouponRow/PramienRow.vue';
import ExtraPunkteRow from '@/components/CouponRow/ExtraPunkteRow.vue';
import { ref } from 'vue';

const couponDisplay = ref(['M', '1', '1', 'X', 'X', 'X', 'X', 'X', 'X', 'X']);

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
      <img src="/src/components/icons/logo.svg.webp" class="mcdelivery-marker"/>
      <div>Sie sehen, was bei Dillenburg, Kasseler Str. 34 zur Abholung verfügbar ist. <span class="text-link">Standort ändern</span></div>
    </div>
    <div class="pramien">
      <PramienRow />
    </div>
    <div class="Coupons">
      <CouponRow />
    </div>
    <div class="extra-punkte">
      <ExtraPunkteRow />
    </div>
    <div class="zum-qrcode">
      <div>
        <div class="text-header">Mit jeder Bestellung</div>
        <div class="text-header gradient-text">Punkte sammeln.</div>
        <div class="sub-text">Qr Code scannen oder vierstelligen Code nennen.</div>
      </div>
      <div class="zum-qr-button">
        <div>Zum QR Code</div>
      </div>
      <img class="qrcode-img" src="/src/components/icons/mcdonaldsqrcode.png"/>
      <img class="arrow-img" src="/src/components/icons/curved_arrow.png"/>
    </div>
    <div class="couponcode">
      <div class="codeeingabe">
        <img src="/src/components/icons/megaphon.webp"/>
        <div>Codeeingabe</div>
      </div>
      <div class="coupon-main">
        <div class="coupon-title">Du hast einen Couponcode?</div>
        <div class="sub-title">Dann löse ihn doch hier ein!</div>
        <div class="code-input-display">
          <div class="coupon-letter-box" v-for="(l, i) in couponDisplay">
            <div :style="`opacity: ${l == 'X' ? '0.4' : '1'};`">{{ l }}</div>
            <div v-if="i < couponDisplay.length-1" class="trennlinie"></div>
          </div>
        </div>
      </div>
      <div class="einlosen-button">
        <div>Jetzt einlösen</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trennlinie {
  background-color: rgba(0, 0, 0, 0.2);
  height: 80%;
  width: 1px;
  position: absolute;
  right: 0;
}
.coupon-letter-box {
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.code-input-display {
  margin-top: 2vh;
  width: 100%;
  height: 3vh;
  background-color: white;
  display: flex;
}
.sub-title {
  margin-top: 1vh;
}
.coupon-title {
  font-weight: bold;
  font-size: 260%;
  line-height: 90%;
  margin-top: 1vh;
}
.codeeingabe {
  height: 15%;
  width: 100%;
  background-color: white;
  color: #00000077;
  display: flex;
  align-items: center;
}
.codeeingabe img {
  height: 3vh;
  margin-left: 5vw;
  margin-right: 3vw;
}
.coupon-main {
  height: 65%;
  width: 100%;
  background-color: rgba(255, 145, 0, 0.7);
  padding: 2vh 2vw;
  background-image: url('/src/components/icons/burger-bun-bg.jpg');
}
.einlosen-button {
  height: 20%;
  width: 100%;
  background-color: rgb(255, 145, 0);
  display: grid;
  place-items: center;
}
.arrow-img {
  position: absolute;
  height: 10vh;
  right: 30%;
  top: 45%;
  rotate: -45deg;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
.qrcode-img {
  position: absolute;
  height: 10vh;
  right: 5%;
  top: 20%;
}
.zum-qr-button {
  background-color: #ffcc00;
  width: fit-content;
  padding: 1.4vh 4vw;
  font-size: 80%;
  border-radius: 5px;
}
.sub-text {
  font-size: 70%;
  width: 50%;
  margin: 1vh 0 2vh 0;
}
.gradient-text {
  background: #A300BD;
  background: linear-gradient(to right, #a70389 0%, #FF0000 50%, #c9a100 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.zum-qrcode {
  position: relative;
  padding: 2vh;
  height: fit-content;
  width: 90vw;
  margin: 6vh 5vw 3vh 5vw;
  /* border: 1px solid grey; */
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  position: relative;
}
.couponcode {
  height: 40vh;
  width: 90vw;
  margin: 6vh 5vw 2vh 5vw;
  /* border: 1px solid grey; */
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}
.mcdelivery-marker {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 2vh;
}
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
  overflow-y: scroll;
  height: 82vh;
}
</style>