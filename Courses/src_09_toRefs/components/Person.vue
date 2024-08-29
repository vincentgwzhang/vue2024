<template>
    <div class="person">
        <p>name: {{ name }}</p>
        <p>age: {{ age }}</p>

        <button @click="updateName">Update name</button>
        <button @click="updateAge">Update age</button>
    </div>
</template>

<script lang="ts" setup>
    import {reactive, toRefs} from 'vue';

    // data
    let person = reactive({
        name: 'zhang san',
        age: 18
    });

    let {age, name} = toRefs(person);

    // function
    function updateName() {
        name.value = 'Li Si';
    }

    function updateAge() {
        age.value = age.value + 1;
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