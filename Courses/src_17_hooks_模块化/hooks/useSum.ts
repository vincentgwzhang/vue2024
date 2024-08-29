import {ref, onMounted} from 'vue';

export default function() {
    let sum = ref(0);

    function addme() {
        sum.value = sum.value + 1;
    }

    onMounted(() => {
        addme();
    });

    return {
        sum,
        addme
    }
}