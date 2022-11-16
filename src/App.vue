<template>
  <HeaderComponent />
  <div class="main-content">
    <SelectComponent @currentSeries="getCharacters()" />
    <Transition name="bounce">
      <CardsBox v-if="changeTest" :charList="store.charactersArray" />
      <div class="loading" v-else>
        <h2>Loading
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </h2>
      </div>
    </Transition>
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
        composedApi += '?category=' + this.store.selectedSeries;
      }
      axios.get(composedApi).then((response) => {
        this.store.charactersArray = { ...response.data };
        this.store.numOfChar = response.data.length;
      })
    }
  },

  created() {
    this.getCharacters();
  },


  computed: {
    changeTest() {
      if (this.store.numOfChar > 0) {
        return true;
      } else {
        return false;
      }
    }
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


.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h2 {

    span {
      margin: 0px 2px;
      animation: testdot 0.6s infinite ease-in-out;
      opacity: 0;

      &:nth-child(2) {
        animation-delay: 0.2s;
      }

      &:nth-child(3) {
        animation-delay: 0.4s;
      }
    }


    @keyframes testdot {

      0% {
        opacity: 0;
      }

      50% {
        opacity: 0.4;
      }

      100% {
        opacity: 1;
      }

    }

  }
}

.bounce-enter-active {
  animation: bounce-in 0.4s;
}

.bounce-leave-active {
  animation: bounce-in 0.4s reverse;
}

@keyframes bounce-in {

  0% {
    scale: 0;
    opacity: 0;
  }

  50% {
    scale: 0.5;
    opacity: 0.5;
  }

  100% {
    scale: 1;
    opacity: 1;
  }

}
</style>