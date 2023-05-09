<script setup lang="ts">
import { RouterLink } from 'vue-router';
let entries:Array<{text:string,img_link:string,path:string}> = [
   {
    'text' : 'Start',
    'img_link' : '/src/components/icons/logo.svg.webp',
    'path' : '/'
   },
   {
    'text' : 'Bestellen',
    'img_link' : '/src/components/icons/fries.png',
    'path' : '/order'
   },
   {
    'text' : 'MyMcDonald´s',
    'img_link' : '/src/components/icons/mymcdonalds.png',
    'path' : '/mymc'
   },
   {
    'text' : 'Prämienwochen',
    'img_link' : '/src/components/icons/prämienwochen.png',
    'path' : '/'
   },
   {
    'text' : 'Mehr',
    'img_link' : '/src/components/icons/dots.png',
    'path' : '/more'
   }
]
</script>

<template>
  <div class="wrapper">
    <RouterLink class="wrappere" v-for="entry in entries" :to="entry.path">
      <img id="img" :src="entry.img_link"/>
      <div id="text">{{ entry.text }}</div>
    </RouterLink>
  </div>
</template>

<style scoped>
.wrappere {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20vw;
}
#img {
  height: 3vh;
  margin-bottom: 0.5vh;
}
#text {
  width: fit-content;
  /* margin-bottom: 1vh; */
  font-size: 65%;
  opacity: 0.7;
}
.wrapper {
  display: flex;
  height: 8vh;
  box-shadow: 0 0 1vh rgba(0, 0, 0, 0.3);
  background-color: white;
}
</style>