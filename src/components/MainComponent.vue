<template>
    <main class="mt-4 ps-5">
        <div class="d-flex">
            <h3>OUR CONSULTANTS CAN HELP YOU</h3>
            <div class="gi-tratto"></div>
        </div>
        <div class="container">
            <div class="row">
                <ConsultComponent v-for="cons in store.consultants" :title="cons.title" :p="cons.p" :icon="cons.icon" />
            </div>
        </div>
    </main>
</template>

<script>
import { store } from '../data/store';
import ConsultComponent from './ConsultComponent.vue';
export default {
    data() {
        return {
            store
        }
    },
    components: {
        ConsultComponent
    }
}
</script>

<style lang="scss" scoped>
@use'../assets/partials/variables.scss' as *;

h3 {
    font-family: 'Bai Jamjuree';
}

.gi-tratto {
    background-color: $sec;
    height: 3px;
    width: 74%;
    margin-top: 20px;
    margin-left: 10px;

}
</style>