<template>
    <div class="person">
        <h2> One car brand is {{ car.brand }}, price is {{ car.price }}</h2>
        <button @click="changePrice()">Update car price</button>
        <button @click="changeCar()">Update car</button>
    </div>
</template>

<script lang="ts" setup>
    import {ref, reactive} from 'vue';

    let car = reactive({
        brand: 'BMW',
        price: 100
    })

    function changeCar() {
        Object.assign(car, {
            brand: 'ABC',
            price: 10
        });
    }

    function changePrice() {
        car.price = car.price + 10;
    }
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