<template>
    <div class="found-bar">
        <h3>Found {{ store.numOfChar }} characters</h3>
    </div>
</template>

<script>
import { store } from '../store';

export default {
    name: 'CharacterFound',
    data() {
        return {
            store,
        }
    },
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

.found-bar {
    background-color: $dark;
    padding: 14px 18px;
    margin-bottom: 20px;
}
</style>