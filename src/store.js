import { reactive } from 'vue';


export const store = reactive({
    api: 'https://www.breakingbadapi.com/api/characters',
    charactersArray: [],
    selectedSeries: '',
    numOfChar: '',
});
