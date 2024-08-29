<template>
  <ul class="news-list">
    <li>ID: {{ route.query.id }}</li>
    <li>TITLE: {{ route.query.title }}</li>
    <li>CONTENT: {{ route.query.content }}</li>
  </ul>
</template>

<script setup lang="ts">
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