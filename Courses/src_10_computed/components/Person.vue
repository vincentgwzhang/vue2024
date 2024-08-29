<template>
    <div class="person">
        <p>name: <input type="text" v-model="firstName" /></p>
        <p>age: <input type="text" v-model="lastName" /></p>
        <p>fullname: {{ fullname }}</p>
        <button @click="changeFullname">Change full name</button>
    </div>
</template>

<script lang="ts" setup>
    import {ref, computed} from 'vue';
    let firstName = ref('Zhang');
    let lastName  = ref('San');

    // let fullname = computed(() => {
    //     return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + ' ' + lastName.value;
    // });

    let fullname = computed({
        get() {
            return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + ' ' + lastName.value;
        },
        set(value) {
            let arr = value.split('-');
            firstName.value = arr[0];
            lastName.value = arr[1];
        }
    });

    function changeFullname() {
        fullname.value = 'li-si';
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