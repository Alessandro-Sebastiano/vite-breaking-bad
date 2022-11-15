<template>
  <HeaderComponent />
  <div class="main-content">
    <SelectComponent @currentSeries="getCharacters()" />
    <CardsBox :charList="store.charactersArray" />
  </div>
</template>

<script>
import { store } from './store'
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import SelectComponent from './components/SelectComponent.vue';
import CardsBox from './components/CardsBox.vue';



export default {
  components: {
    HeaderComponent,
    SelectComponent,
    CardsBox,
  },

  data() {
    return {
      store,
    }
  },


  methods: {
    getCharacters() {
      let composedApi = this.store.api;
      if (this.store.selectedSeries && this.store.selectedSeries != 'Default') {
        composedApi = composedApi + '?category=' + this.store.selectedSeries;
      }
      axios.get(composedApi).then((response) => {
        this.store.charactersArray = { ...response.data };
        this.store.numOfChar = response.data.length;
      })
    }
  },

  created() {
    this.getCharacters();
  }

}
</script>

<style lang="scss" scoped>
@use './assets/partials/variables' as *;

.main-content {
  width: 75%;
  height: 50px;
  margin: 38px auto;
}
</style>