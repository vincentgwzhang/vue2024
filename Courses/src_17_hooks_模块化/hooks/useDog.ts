import {reactive, onMounted} from 'vue';
import axios from 'axios';

export default function() {
    let dogList = reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_2012.jpg',
        'https://images.dog.ceo/breeds/pembroke/n02113023_3927.jpg',
        'https://images.dog.ceo/breeds/pembroke/n02113023_1823.jpg',
    ]);
    
    async function addDog() {
        try {
            let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random');
            dogList.push(result.data.message);
        } catch(error) {
            console.log(error);
        }
    }

    onMounted(() => {
        addDog();
    });

    // 向外部提供任何东西
    return {
        dogList,
        addDog
    };
}
