<script setup lang="ts">
import FrontBanner from '@/components/FrontBanner.vue';
import CouponRow from '@/components/CouponRow/CouponRow.vue';
import HomeBanner from '@/components/HomeBanners/HomeBanner.vue';
</script>

<template>
  <div style="width: 100vw; height: 86vh; overflow-y: auto; overflow-x: hidden;">
    <FrontBanner />
    <CouponRow style="margin-top: 3vh;"/>
    <HomeBanner />
  </div>
</template>

<style scoped>

</style>