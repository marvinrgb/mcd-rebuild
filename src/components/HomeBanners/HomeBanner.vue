<script setup lang="ts">

</script>

<template>
  <div class="alls">
    <div class="text-header">Was gibt's Neues</div>
    <div class="box">
      <!-- <div class="yellow-button"><div>Smart sparen</div></div> -->
      <img class="bannerimg" src="/src/components/icons/banner3.jpg" />
      <div class="beschr">Unverbindliche Preisempfehlung. In teilnehmenden Restaurants. In Frühstückrestaurants ab 10 Uhr (samstags, sonn- und feiertags ab 11 Uhr).</div>
    </div>
    <div class="box">
      <!-- <div class="yellow-button"><div>Jetzt probieren</div></div> -->
      <img class="bannerimg" src="/src/components/icons/banner1.jpg" />
      <div class="beschr">In allen teilnehmenden Restaurants. In Frühstückrestaurants ab 10 Uhr (samstags, sonn- und feiertags ab 11 Uhr). Solange der Vorrat reicht.</div>
    </div>
    <div class="box">
      <!-- <div class="yellow-button"><div>Jetzt entdecken</div></div> -->
      <img class="bannerimg" src="/src/components/icons/banner2.jpg" />
      <div class="beschr">In allen teilnehmenden Restaurants. In Frühstückrestaurants ab 10 Uhr (samstags, sonn- und feiertags ab 11 Uhr). Solange der Vorrat reicht.</div>
    </div>
  </div>
</template>

<style scoped>
.yellow-button {
  position: absolute;
  height: 15%;
  width: 32%;
  left: 5%;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1vh 5vw;
  background-color: rgb(255, 170, 0);
  z-index: 10;
  font-size: 90%;
}
.box {
  position: relative;
  margin-bottom: 2vh;
}
.text-header {
  padding-bottom: 2vh;
}
.bannerimg {
  width: 90vw;
  filter: saturate(1.4)
}
.alls {
  padding: 2vh 5vw;
}
.beschr {
  margin-top: 0.5vh;
  font-size: 60%;
  opacity: 0.6;
}
</style>