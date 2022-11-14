<template>
  <HeaderComponent />
  <div class="main-content">
    <SelectComponent />
    <CardsBox />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import SelectComponent from './components/SelectComponent.vue';
import CardsBox from './components/CardsBox.vue';



export default {
  components: {
    HeaderComponent,
    SelectComponent,
    CardsBox,
  }
}
</script>

<style lang="scss" scoped>
@use './assets/partials/variables' as *;

.main-content {
  width: 70%;
  height: 50px;
  margin: 38px auto;
}
</style>