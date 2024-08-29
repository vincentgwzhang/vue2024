<template>
    <div class="person">
        <h2>Sum = {{ sum }}</h2>
        <button @click="add">Click for add</button>
    </div>
</template>

<script lang="ts" setup>
    import {ref, 
        onBeforeMount, 
        onMounted, 
        onBeforeUpdate, 
        onUpdated, 
        onBeforeUnmount, 
        onUnmounted
    } from 'vue';

    let sum = ref(0);

    function add() {
        sum.value = sum.value + 1;
    }

    onBeforeMount(() => {
        console.log('this is onBeforeMount');
    });

    onMounted(() => {
        console.log('this is onMounted');
    });

    onBeforeUpdate(() => {
        console.log('this is onBeforeUpdate');
    });

    onUpdated(() => {
        console.log('this is onUpdated');
    });

    onBeforeUnmount(() => {
        console.log('this is onBeforeUnmount');
    });

    onUnmounted(() => {
        console.log('this is onUnmounted');
    });
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }

    button {
        margin: 15px;;
    }

    li {
        font-size: 20px
    }
</style>