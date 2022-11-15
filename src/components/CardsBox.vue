<template>
    <div class="cards-container">
        <CharacterFound />
        <div class="cards-box">
            <CardComponent v-for="(card, index) in store.charactersArray" :img="card.img" :name="card.name"
                :status="card.status" :category="card.category" />
        </div>
    </div>
</template>

<script>
import { store } from '../store';
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
            store,
        }
    },

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
    justify-content: center;
    flex-wrap: wrap;
}
</style>