<template>
    <h1><router-link class="navbar-brand navbar__logo" :to="{name: 'home'}">Clube dos Laranja <img src="../../../../src/assets/img/icon-orange.png" class="navbar__icon" alt="Logo do Clube dos Laranja"> </router-link></h1>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/__utils.scss';
    @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

    .navbar__logo {
        transition: all 0.3s ease;
        color: $color-white !important;
        margin: 0;
        padding: 0;
        font-family: 'Lobster', cursive;
        font-size: .7em;

        &:hover {
            color: $color-red !important;
        }

        .navbar__icon {
            width: 1em;
            height: 1em;
        }
    }

    @media (min-width: 762px) {
        .navbar__logo {
            margin: 0 10em 0 2em;
        }
    }
</style>

