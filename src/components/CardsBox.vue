<template>
    <div class="cards-container">
        <CharacterFound :num="numOfCharacter" />
        <div class="cards-box">
            <CardComponent v-for="(card, index) in charactersArray" :img="card.img" :name="card.name"
                :status="card.status" :category="card.category" />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import CharacterFound from './CharacterFound.vue';
import CardComponent from './CardComponent.vue';

export default {
    name: 'CardsBox',
    components: {
        CharacterFound,
        CardComponent,
    },

    data() {
        return {
            api: 'https://www.breakingbadapi.com/api/characters',
            charactersArray: [],
            numOfCharacter: '',
        }
    },


    methods: {
        getCharacters() {
            axios.get(this.api).then((response) => {
                this.charactersArray = { ...response.data };
                this.numOfCharacter = response.data.length;
            })
        }
    },

    created() {
        this.getCharacters();
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

.cards-container {
    background-color: $ligth;
    width: 100%;
    padding: 48px 36px;
    margin-top: 20px;
}


.cards-box {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
}
</style>