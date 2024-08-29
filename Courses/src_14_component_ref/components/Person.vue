<template>
    <div class="person">
        <h1>China</h1>
        <h1 ref="title2">Beijing</h1>
        <h1>Atguigu</h1>
        <button @click="showLog">Click me</button>
    </div>
</template>

<script lang="ts" setup>
    import {ref} from 'vue';

    let a = ref(0);
    let b = ref(1);
    let c = ref(2);

    let title2 = ref();// title2 必须和上面的 title2 一样

    function showLog() {
        console.log(title2.value);
    }
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