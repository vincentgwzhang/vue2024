<template>
  <Person a="haha" :personList1="personList" />
</template>

<script lang="ts" setup>
  import Person from './components/Person.vue';
  import {reactive} from 'vue';
  import {type PersonInter, type Persons} from '@/types';

    let person: PersonInter = {
        id: '12',
        name: 'zhang san',
        age: 18
    }

    let personList: Persons = reactive([
        {id: '01', name: 'name01', age: 21},
        {id: '02', name: 'name02', age: 22},
        {id: '03', name: 'name03', age: 23},
    ]);
</script>