<template>
    <div class="select-btn">
        <select name="options" id="" v-model="store.selectedSeries" @change="getSeries()">
            <option value="" disabled hidden selected>Select Series</option>
            <option :value="series" v-for="(series, index) in categories">{{ series }}
            </option>
        </select>
    </div>
</template>

<script>
import { store } from '../store';

export default {
    name: 'SelectComponent',
    data() {
        return {
            categories: ['Default', 'Breaking Bad', 'Better Call Saul'],
            store,
        }
    },

    methods: {
        getSeries() {
            this.$emit('currentSeries');
        }
    },

}

</script>

<style lang="scss" scoped>
.select-btn {


    select {
        padding: 8px 4px;
        margin: 0 10px;
        border-radius: 6px;
        border: 0px;

        &:focus {
            outline: none;
        }
    }

}
</style>