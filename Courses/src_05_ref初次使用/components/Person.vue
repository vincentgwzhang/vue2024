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

<script lang="ts" setup>
    import { ref } from 'vue';

    let name = ref('zhang san');
    let age = ref(18);
    let tel = '13500000000';
    let address = 'an address';

    function showTel() {
        console.log(tel);
    }

    function changeName() {
        name.value = 'Zhang-san'
    }

    function changeAge() {
        age.value = age.value + 1;
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