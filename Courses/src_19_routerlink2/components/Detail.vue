<template>
  <ul class="news-list">
    <li>ID: {{ route.params.id }}</li>
    <li>TITLE: {{ route.params.title }}</li>
    <li>CONTENT: {{ route.params.content }}</li>
  </ul>
</template>

<script setup lang="ts">
  import {toRefs} from 'vue';
  import { useRoute } from 'vue-router';

  let route= useRoute();
  console.log('@', route);
</script>

<style scoped>
  .news-list {
    list-style: none;
    padding-left: 20px;
  }

  .news-list>li {
    line-height: 30px;
  }
</style>