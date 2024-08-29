<template>
    <div class="person">
        <h2> One car brand is {{ car.brand }}, price is {{ car.price }}</h2>
        <button @click="changePrice()">Update car price</button>

        <h2>Study loop</h2>
        <ul>
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>
        </ul>
        <button @click="changeFirstGame()">Update first game</button>
        <br />
    </div>
</template>

<script lang="ts" setup>
    import {ref} from 'vue';

    let car = ref({
        brand: 'BMW',
        price: 100
    })

    let games = ref([
        {id: '01', name: 'game01'},
        {id: '02', name: 'game02'},
        {id: '03', name: 'game03'},
    ]);

    function changePrice() {
        car.value.price = car.value.price + 10;
    }

    function changeFirstGame() {
        games.value[0].name = 'game-updated';
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