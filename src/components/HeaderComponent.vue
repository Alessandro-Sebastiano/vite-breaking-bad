<template>
    <div class="header">
        <div class="logo">
            <img src="/public/breakingbad.jpg" alt="breaking-logo">
        </div>
        <h1>Breaking Bad Api</h1>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
}
</script>

<style lang="scss" scoped>
.header {
    padding: 8px 16px;
    display: flex;
    align-items: center;
}

.logo {
    width: 30px;
    margin-right: 12px;

    img {
        width: 100%;
        height: 100%;
        display: block;
    }
}
</style>