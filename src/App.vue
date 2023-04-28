<template>
  <HeaderComponent />
  <MainComponent />
  <FooterComponent />
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import { store } from './data/store'
import MainComponent from './components/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
export default {
  data() {
    return {
      store
    }
  },
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
  },

}
</script>

<style lang="scss" scoped></style>