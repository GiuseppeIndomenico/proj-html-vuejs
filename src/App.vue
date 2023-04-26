<template>
  <HeaderComponent />
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import { store } from './data/store'
export default {
  data() {
    return {
      store
    }
  },
  components: {
    HeaderComponent
  },

}
</script>

<style lang="scss" scoped></style>