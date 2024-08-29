<template>
    <div class="person">
        <hr />
        <p>Sum = {{ sum }}</p>
        <p>Height = {{ height }}</p>
        <button @click="changeSum">Click me change Sum</button>
        <button @click="changeHeight">Click me change Height</button>
    </div>
</template>

<script lang="ts" setup>
    import {ref, watchEffect} from 'vue';

    let sum = ref(10);
    let height = ref(0);

    function changeSum() {
        sum.value = sum.value + 10;
    }
    function changeHeight() {
        height.value = height.value + 10;
    }

    watchEffect(() => {
        console.log('@');

        if (sum.value >= 60 || height.value >= 80) {
            console.log('sum, height', sum.value, height.value);
        }
    });
</script>

<style scoped>
    .person {
        background-color: azure;
    }

    button {
        margin: 15px;;
    }

    li {
        font-size: 20px
    }
</style>