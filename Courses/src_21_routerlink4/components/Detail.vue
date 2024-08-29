<template>
  <ul class="news-list">
    <li>ID: {{ id }}</li>
    <li>TITLE: {{ title }}</li>
    <li>CONTENT: {{ content }}</li>
  </ul>
</template>

<script setup lang="ts">
  defineProps(['id', 'title', 'content']);
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