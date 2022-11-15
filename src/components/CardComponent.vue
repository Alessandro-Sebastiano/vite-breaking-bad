<template>
    <div class="card">
        <div class="card-image">
            <img :src="img" :alt="name">
        </div>
        <div class="character">
            <h4>{{ name }}</h4>
            <div class="info">
                <span>{{ category }}</span>
                <span>{{ status }}</span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CardComponent',
    props: ['img', 'name', 'status', 'category'],

}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

.card {
    width: calc((100% / 5) - 20px);
    height: 512px;
    min-width: 180px;
    margin: 10px;
    background-color: $background;
    padding: 16px;
    text-align: center;
}

.card-image {
    width: 100%;


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
}


.character {
    text-align: center;

    h4 {
        margin: 26px 0;
    }
}


.info {

    span {
        color: $grey;
        display: block;
        margin: 6px 0;
    }

}
</style>