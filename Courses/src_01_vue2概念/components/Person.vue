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
        data() {
            return {
                name: 'zhangsan',
                age: 18,
                tel: '135111111111'
            };
        },
        methods: {
            showTel() {
                console.log(this.tel);
            },
            changeName() {
                this.name = 'Zhang-san'
            },
            changeAge() {
                this.age = 26
            }
        },
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