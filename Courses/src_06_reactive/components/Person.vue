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
        <h2> Test get name : {{ obj.a.b.c.name }}</h2>
        <button @click="changeObjGame()">Update Object game</button>
    </div>
</template>

<script lang="ts" setup>
    import {reactive} from 'vue';

    let car = reactive({
        brand: 'BMW',
        price: 100
    })

    let games = reactive([
        {id: '01', name: 'game01'},
        {id: '02', name: 'game02'},
        {id: '03', name: 'game03'},
    ]);

    let obj = reactive({
        a : {
            b : {
                c: {
                    name: 'vincent_old'
                }
            }
        }
    });

    function changeObjGame() {
        obj.a.b.c.name = 'vincent_new'
    }

    function changePrice() {
        car.price = car.price + 10;
    }

    function changeFirstGame() {
        games[0].name = 'game-updated';
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