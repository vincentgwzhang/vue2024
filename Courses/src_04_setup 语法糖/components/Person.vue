<template>
    <div class="person">
        <h2>Name: {{ name }}</h2>
        <h2>Age:   {{ age }}</h2>
        <h2>Address:   {{ address }}</h2>
        <button @click="showTel()">Clicked Me</button>
        <button @click="changeName()">Update name</button>
        <button @click="changeAge()">Update age</button>
    </div>
</template>

<!-- <script lang="ts">
    export default {
        name: 'Person'
    }

    1, npm install vite-plugin-vue-setup-extend -D
    2, import vueSetupExtend from 'vite-plugin-vue-setup-extend', add vueSetupExtend() in defineConfig.plugins, in [vite.config.ts]
</script> -->

<script lang="ts" setup>
    let name = 'zhang san';
    let age = 18;
    let tel = '13500000000';
    let address = 'an address';

    function showTel() {
        console.log(tel);
    }

    function changeName() {
        name = 'Zhang-san'
    }

    function changeAge() {
        age = age + 1;
    }
</script>

<style scoped>
    .person {
        background-color: azure;
    }

    button {
        margin: 15px;;
    }
</style>