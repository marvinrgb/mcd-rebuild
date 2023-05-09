<script setup lang="ts">

</script>

<template>
  <div class="wrapper">
    <img class="mymc-logo" src="/src/components/icons/mymcdonalds-logo.svg"/>
    <img class="qr-logo" src="/src/components/icons/mcdonaldsqrcode.png"/>
    <div class="points-text">
      <div>784</div>
      <div>Punkte</div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  height: 6vh;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
}
.mymc-logo {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  height: 3.2vh;
}
.qr-logo {
  position: absolute;
  left: 65%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  height: 4vh;
}
.points-text {
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  height: 4vh;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>