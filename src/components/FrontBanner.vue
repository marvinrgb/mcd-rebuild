<script setup lang="ts">

</script>

<template>
  <div class="wrapper">
    <div class="zone1">
      <div class="gewinnen-text">
        Punkten. Einlösen.<br />
        <span class="gradient-text">Gewinnen!</span>
      </div>
      <img class="snackers" src="/src/components/icons/cheesesnackers.png"/>
      <img class="punkte" src="/src/components/icons/400punkte.png"/>
      <div class="mymd-images">
        <img style="top: 5%; left: 48%; height: 2vh;" class="circle-img" src="/src/components/icons/mymcCircle.png"/>
        <img style="top: 30%; left: 50%; height: 3vh;" class="circle-img" src="/src/components/icons/mymcCircle.png"/>
        <img style="top: 17%; left: 60%; height: 3.2vh;" class="circle-img" src="/src/components/icons/mymcCircle.png"/>
        <img style="top: 45%; left: 66%; height: 2.8vh;" class="circle-img" src="/src/components/icons/mymcCircle.png"/>
        <img style="top: 4%; left: 80%; height: 3.5vh;" class="circle-img" src="/src/components/icons/mymcCircle.png"/>
        <img style="top: 12%; left: 90%; height: 2.5vh;" class="circle-img" src="/src/components/icons/mymcCircle.png"/>
        <img style="top: 17%; left: 74%; height: 1.8vh;" class="circle-img" src="/src/components/icons/mymcCircle.png"/>
      </div>
    </div>
    <div class="zone2">
      <div class="button-los-gehts">
        <div>Los geht's!</div>
      </div>
    </div>
    <div class="zone3">
      <div>Nur für registrierte User, die am MyMcDonald`s Bonusprogramm teilnehmen, in ausgewählten Restaurants. Teilnahmebedingungen und weiter Infos zum Gewinnspiel in der App.</div>
    </div>
  </div>
</template>

<style scoped>
.punkte {
height: 8vh;
position: absolute;
z-index: 999;
right: 10%;
bottom: 10%;
}
.snackers {
  position: absolute;
  height: 22vh;
  z-index: 999;
  right: 5%;
  top: -1vh;
}
.mymd-images {
  z-index: -100;
  /* position: absolute; */
}
.circle-img {
  z-index: -100;
  height: 3vh;
  position: absolute;
}
.gradient-text {
  background: #A300BD;
  background: linear-gradient(to right, #A300BD 0%, #FF0000 50%, #c9a100 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.wrapper {
  height: 30vh;
}
.gewinnen-text {
  position: absolute;
  font-size: 140%;
  left: 5%;
  bottom: 50%;
  transform: translateY(50%);
}
.zone1 {
  position: relative;
  /* background-color: white; */
  height: 45%;
  width: 100%;
  font-weight: bold;
}
.zone2 {
  background-color: rgb(255, 191, 0);
  height: 35%;
  width: 100%;
  position: relative;
}
.button-los-gehts {
  height: 30%;
  width: 25%;
  /* font-weight: 500; */
  font-size: 75%;
  background-color: #fff;
  padding: 1vh 8vw;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  bottom: 20%;
  left: 5%;
}
.zone3 {
  color: rgba(128, 128, 128, 0.5);
  height: 20%;
  font-size: 63%;
  padding: 0 6vw;
  text-align: justify;
  padding-top: 1vh;
}
</style>