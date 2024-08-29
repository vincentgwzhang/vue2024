<template>
    <div class="person">
        <hr />
        <p>name: {{ person.name }}</p>
        <p>age: {{ person.age }}</p>
        <p>car: {{ person.car.c1 }} {{ person.car.c2 }}</p>

        <button @click="updateName">Update name</button>
        <button @click="updateAge">Update age</button>
        <button @click="updateC1">Update C1 car</button>
        <button @click="updateC2">Update C2 car</button>
        <button @click="updateCar">Update car</button>
    </div>
</template>

<script lang="ts" setup>
    import {reactive, watch} from 'vue';
    let person = reactive({
        name: 'zhang san',
        age: 18,
        car: {
            c1: 'BENZ',
            c2: 'BMW'
        }
    });

    function updateName() {
        person.name += '~';
    }
    function updateAge() {
        person.age += 1;
    }
    function updateC1() {
        person.car.c1 += ' c';
    }
    function updateC2() {
        person.car.c2 += ' c';
    }
    function updateCar() {
        person.car = {
            c1: 'abc',
            c2: 'def'
        };
    }

    // watch(() => person.name, (oldValue, newValue) => {
    //     console.log('detected name change');
    // });

    watch([() => person.car, () => person.name, () => person.age], (oldValue, newValue) => {//因为person.car 是对象, 所以可以直接写, 不需要函数形式
        console.log('detected property change', newValue);
    }, {deep: true});
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