<template>
  <div class="home">
    <img src="http://www.atguigu.com/images/index_new/logo.png" alt="">
  </div>
</template>

<script setup lang="ts" name="Home">
import {onMounted, onUnmounted} from 'vue';

onMounted(() => {
  console.log('[Home] component [onMounted] event triggered');
});

onUnmounted(() => {
  console.log('[Home] component [onUnmounted] event triggered');
});
</script>

<style scoped>
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>