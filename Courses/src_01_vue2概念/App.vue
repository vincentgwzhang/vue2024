<template>
  <h2>Hello world</h2>
  <Person></Person>
</template>

<script lang="ts">
  import Person from './components/Person.vue';

  export default {
    name: 'App',
    components: {Person}
  }
</script>

<style scoped>
</style>
