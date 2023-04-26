<template>
  <HeaderComponent />
  <MainComponent />
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import { store } from './data/store'
import MainComponent from './components/MainComponent.vue';
export default {
  data() {
    return {
      store
    }
  },
  components: {
    HeaderComponent,
    MainComponent
  },

}
</script>

<style lang="scss" scoped></style>