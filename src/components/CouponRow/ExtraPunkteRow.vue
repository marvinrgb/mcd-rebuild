<script setup lang="ts">
let data = ["2"]
</script>

<template>
  <div class="all">
    <div class="head">
      <div class="text-header">Extra-Punkte</div>
      <!-- <div class="linktext">Alles anzeigen -></div> -->
      <div class="text-sub-header">Extra-Punkte freischalten und genießen!</div>
    </div>
    <div class="row">
      <div class="offer">
        <img src="/src/components/icons/extra-punkte.png" />
        <div class="offer-title"><div>500 Extra-Punkte für deine Bestellung ab 12€</div></div>
        <div class="offer-expire">Die Prämie läuft morgen ab</div>
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
  font-size: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}
.all {
  width: 100%;
  height: 34vh;
  /* border: 1px solid black; */
  padding-left: 5%;
  padding-bottom: 2vh;
}
.offer {
  height: 100%;
  width: 25vw;
  margin-right: 3vw;
}
.row {
  height: 80%;
  display: flex;
  width: 95vw;
  overflow-x: auto;
  overflow-y: hidden;
}
.row img {
  width: 100%;
  border-radius: 8px;
}
.head {
  height: 30%;
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  margin-bottom: 3vh;
}
.text-sub-header {
  font-size: 80%;
  margin-top: 8vh;
  margin-left: -36.6%;
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