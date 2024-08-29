<template>
  <Person />
</template>

<script lang="ts" setup>
  import Person from './components/Person.vue';
  import {onMounted} from 'vue';

  onMounted(() => {
    console.log('I am the last');
  });
</script>