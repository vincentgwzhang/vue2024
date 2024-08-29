<template>
    <div class="person">
        <h2>For the current sum is {{ sum }}</h2>
        <button @click="addme" >Add me</button>
    </div>
    <hr />
    <img v-for="(dog, index) in dogList" :src="dog" :key="index" />
    <hr />
    <button @click="addDog">Add one more dog</button>
</template>

<script lang="ts" setup>
    import useSum from '@/hooks/useSum';
    import useDog from '@/hooks/useDog';

    const {sum, addme} = useSum();
    const {dogList, addDog} = useDog();
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

    img {
        width: 200px;
    }
</style>