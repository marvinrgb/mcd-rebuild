<script setup lang="ts">

</script>

<template>
  <div class="wrapper">
    <img class="mymc-logo" src="/src/components/icons/mymcdonalds-logo.svg"/>
    <img class="qr-logo" src="/src/components/icons/mcdonaldsqrcode.png"/>
    <div class="circle-logo">
      <img src="/src/components/icons/logo.svg.webp"/>
    </div>
    <div class="points-text">
      <div>903</div>
      <div>Punkte</div>
    </div>
  </div>
</template>

<style scoped>
.circle-logo {
  height: 3vh;
  width: 3vh;
  border-radius: 50%;
  border: 2px solid red;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
}
.circle-logo img {
  height: 55%;
}
.wrapper {
  display: flex;
  height: 10vh;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
}
.mymc-logo {
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
  height: 5vh;
}
.qr-logo {
  position: absolute;
  left: 45%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  height: 4vh;
}
.points-text {
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  height: 4vh;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 130%;
}
.points-text div:nth-child(1) {
  font-size: 150%;
  margin-right: 2vw;
  font-weight: bolder;
  margin-bottom: 0.6vh;
}

</style>