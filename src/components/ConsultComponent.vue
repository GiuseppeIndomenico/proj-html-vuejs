<template>
    <div class="col-6 mt-5">
        <div class="row">
            <div class="col-2">
                <i :class="icon"></i>
            </div>
            <div class="col-10 ">
                <h4 class="mb-3 fw-semibold">{{ title }}</h4>
                <p>{{ p }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'title',
        'icon',
        'p'
    ]
}
</script>

<style lang="scss" scoped>
@use'../assets/partials/variables.scss' as *;

i {
    color: $light;
    background-color: $hover-color;
    padding: 1rem;
    border-radius: 50%;
    font-size: 2rem;
}

.row {
    max-width: 520px;

    h4 {
        font-family: 'Bai Jamjuree';
    }

    p {
        font-family: 'montserrat', Sans-serif;
        ;
    }
}
</style>