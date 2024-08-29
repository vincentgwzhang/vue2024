<template>
    <div class="person">
        <h2>Name: {{ name }}</h2>
        <h2>Age:   {{ age }}</h2>
        <button @click="showTel()">Clicked Me</button>
        <button @click="changeName()">Update name</button>
        <button @click="changeAge()">Update age</button>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Person',
        beforeCreate() {
            console.log('beforeCreate');
        },
        setup() {
            console.log('setup');
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