<template>
    <div class="found-bar">
        <h3>Found {{ num }} characters</h3>
    </div>
</template>

<script>
export default {
    name: 'CharacterFound',
    props: ['num'],
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