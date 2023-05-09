<script setup lang="ts">
let data = ["2","2","2","2","2","2"]
</script>

<template>
  <div class="all">
    <div class="head">
      <div class="text-header">Coupons</div>
      <div class="linktext">Alles anzeigen -></div>
    </div>
    <div class="row">
      <div v-for="d in data" class="offer">
        <img src="/src/components/icons/offersquare.png" />
        <div class="offer-title">1 Cheese- oder Chickenburge...</div>
        <div class="offer-expire">Läuft in 5 Tagen ab</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.offer-expire {
  margin-top: 0.5vh;
  font-size: 60%;
  opacity: 0.6;
}
.offer-title {
  margin-top: 0.5vh;
  font-size: 80%;
}
.all {
  width: 100%;
  height: 28vh;
  /* border: 1px solid black; */
  padding-left: 5%;
}
.offer {
  height: 100%;
  width: 25vw;
  margin-right: 3vw;
}
.row {
  height: 75%;
  display: flex;
  width: 95vw;
  overflow-x: auto;
}
.row img {
  width: 100%;
  border-radius: 8px;
}
.head {
  height: 25%;
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
}
.linktext {
  font-size: 75%;
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
  color: rgb(53, 134, 204);
  font-weight: bold;
}
</style>