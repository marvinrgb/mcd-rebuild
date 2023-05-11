<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import TheMenu from './components/Menu/TheMenu.vue';
import HeaderStart from './components/Header/HeaderStart.vue';
import HeaderMyMc from './components/Header/HeaderMyMc.vue';

import {useRoute} from 'vue-router'
import {computed} from 'vue'


const route=useRoute();

const path = computed(() =>route.path)

</script>

<template>
  <div id="all">
    <HeaderMyMc v-if="path == '/mymc'" />
    <HeaderStart v-else />
    <RouterView />
    <TheMenu id="menu" />
  </div>
</template>

<style scoped>
#all {
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  overflow: hidden;
}

#menu {
  position: absolute;
  bottom: 0px;
  left: 0px;
}
</style>

<style>
* {
  font-family: Arial, Helvetica, sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: black;
}

.text-header {
  font-weight: bold;
  font-size: 135%;
}
.text-link {
  color: #2765ec;
  font-size: 82%;
  text-decoration: underline;
}
</style>