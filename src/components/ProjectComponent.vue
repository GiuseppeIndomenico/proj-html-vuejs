<template>
    <div class="col-4">
        <div class="cont-img position-relative">
            <div class="cover position-absolute">

                <div class="d-flex align-items-center justify-content-between p-2 position-absolute text-cover">
                    <div>
                        <h2 fw-bold>{{ product }}</h2>
                        <p>{{ categorize }}</p>
                    </div>
                    <div class="square d-flex align-items-center justify-content-center m-1"> <i
                            class="fa-solid fa-plus"></i>
                    </div>
                </div>


            </div>
            <img class="img-fluid" :src="url" alt="">
        </div>


    </div>
</template>

<script>
export default {
    props: [
        'url',
        'product',
        'categorize'
    ]


}
</script>

<style lang="scss" scoped>
@use'../assets/partials/variables.scss' as *;

.cover {
    background-color: rgb(213 8 34 / 80%);
    z-index: 2;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    transition: all 1s;
    opacity: 0;

    &:hover {
        opacity: 1;

    }



    .text-cover {
        left: 0;
        bottom: 0;
        right: 0;
    }

}


.square {
    padding: .5rem;
    width: 50px;
    height: 50px;
    background-color: rgba($color: $dark, $alpha: 0.5);
    transition: all .25s;
    cursor: pointer;

    i {
        font-size: 20px;
        transition: all .25s;
    }

    &:hover {
        background-color: $sec;

        i {
            transform: rotate(90deg);
        }
    }

}
</style>