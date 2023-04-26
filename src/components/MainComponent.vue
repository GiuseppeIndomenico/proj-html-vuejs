<template>
    <main class="mt-4 ps-5">
        <div class="d-flex">
            <h3 class="title-main">OUR CONSULTANTS CAN HELP YOU</h3>
            <div class="gi-tratto long"></div>
        </div>
        <div class="container">
            <div class="row">
                <ConsultComponent v-for="cons in store.consultants" :title="cons.title" :p="cons.p" :icon="cons.icon" />
            </div>
        </div>
        <section>
            <div class="row">
                <div class="col-7">
                    <img src="\images\business-people-working-together-on-project-and-5FHSKBL.jpg" alt="">
                </div>

                <div class="col-5 d-flex align-items-center dark">
                    <div class="gi-tratto short me-2"></div>
                    <h3>ABOUT US</h3>
                </div>

            </div>
        </section>

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

.title-main {
    margin-left: 280px;
}

.gi-tratto {
    background-color: $sec;
    height: 3px;

}

.long {
    width: 59%;
    margin-top: 20px;
    margin-left: 10px;
}

.short {
    width: 50px;
    margin-bottom: 5px;
}

.dark {
    background-color: $primary;
    color: $light
}
</style>