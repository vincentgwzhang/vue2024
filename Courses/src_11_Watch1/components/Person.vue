<template>
    <div class="person">
        <h2>Sam = {{ sam }}</h2>
        <button @click="changeSum">Change sam</button>

        <hr />
        <h2>姓名: {{ person.name }}</h2>
        <h2>年龄: {{ person.age }}</h2>
        <button @click="changeName">Change name</button>
        <button @click="changeAge">Change age</button>
        <button @click="changePerson">Change age</button>
    </div>
</template>

<script lang="ts" setup>
    import {ref, watch} from 'vue';

    let sam = ref(0);

    function changeSum() {
        sam.value = sam.value + 1;
    }

    let stopWatch = watch(sam, (oldValue, newValue) => {
        console.log('Sam changed value: ', oldValue, newValue);
        if (oldValue > 5) {
            stopWatch();
        }
    });


    let person = ref({
        name: 'Zhang sam',
        age: 18
    });

    function changeName() {
        person.value.name += '~';
    }

    function changeAge() {
        person.value.age += 1;
    }

    function changePerson() {
        person.value = {name: 'Li Di', age: 90}
    }

    let stopWatchPerson = watch(person, (newValue,oldValue)=>{
        console.log('Person changed triggered', oldValue, newValue);
    }, {deep:true});
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