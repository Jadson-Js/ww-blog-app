<template>
    <h2><router-link class="h3 is-link copyright__logo" :to="{name: 'home'}">1001 Relatos</router-link></h2>

    <span class="copyright__text">Copyright © 2022 Jadson Abreu</span>
    <span class="copyright__text">Desenhado & desenvolvido por Jadson Abreu</span>
</template>

<script>
    export default {
        components: {
      
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/__utils.scss';
    @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

    .copyright__logo {
        color: #fff;
        font-family: 'Lobster', cursive;
    }

    .copyright__text {
        margin-bottom: 0;
        color:$color-mute-white;
        text-transform: capitalize;
    }
</style>