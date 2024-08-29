<template>
  <Person ref="ren" />
  <button @click="showInfo">Show Info</button>
</template>

<script lang="ts" setup>
  import Person from './components/Person.vue';
  import {ref} from 'vue';

  let ren = ref();

  function showInfo() {
    console.log(ren.value);
  }
</script>