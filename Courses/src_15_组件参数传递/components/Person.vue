<template>
    <div class="person">
        <ul>
            <li v-for="p in personList1" :key="p.id">{{ p.name }} -- {{ p.age }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
    import {defineProps, withDefaults} from 'vue';
    import {type Persons} from '@/types';

    //defineProps<{personList1:Persons}>();

    // defineProps(['a', 'personList1']);

    withDefaults(defineProps<{personList1?:Persons}>(), {
        personList1: () => [
            {id: '04', name: 'name04', age: 24},
            {id: '05', name: 'name05', age: 25},
            {id: '06', name: 'name06', age: 26},
        ]
    });
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
</style>