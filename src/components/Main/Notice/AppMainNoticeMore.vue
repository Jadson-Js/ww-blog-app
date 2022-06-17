<template>
    <div class="col-12 col-md-8">
        <div class="text-center is-box">
            <span class="h3 notice__more">Veja também</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import 'src/assets/scss/__utils.scss';

    .is-box {
        background: #fff;
        text-transform: capitalize;
        padding: 1em;
    }

    .notice__more {
        font-weight: 600;
        color: $color-dark-black;
    }


    @media (min-width: 762px) {
        .is-box {
            margin: auto 1em 0 1em;
        }
    }
</style>