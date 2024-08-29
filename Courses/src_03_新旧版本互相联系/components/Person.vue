<template>
    <div class="person">
        <h2>Name: {{ name }}</h2>
        <h2>Age:   {{ age }}</h2>
        <button @click="showTel()">Clicked Me</button>
        <button @click="changeName()">Update name</button>
        <button @click="changeAge()">Update age</button>

        <button @click="test()">Complex {{var_a}} {{var_b}}</button>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Person',
        beforeCreate() {
            console.log('beforeCreate');
        },
        data() {// data 比 setup 要慢, 所以能获取setup 里面的东西
            return {
                var_a: 100,
                var_b: this.name
            }
        },
        methods: {
            test() {
                console.log('b');
            }
        },
        setup() {// set up 是最早的生命周期
            let name = 'zhang san';
            let age = 18;
            let tel = '13500000000';

            function showTel() {
                console.log(tel);
            }

            function changeName() {
                name = 'Zhang-san'
            }

            function changeAge() {
                age = age + 1;
            }

            return {
                name, age, showTel, changeName, changeAge
            }

            // return () => 'Ha ha';
        }
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