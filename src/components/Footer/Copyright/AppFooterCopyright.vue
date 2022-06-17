<template>
    <h1 class="h3">Blog.com</h1>

    <p class="copyright__text">Copyright © 2022 Jadson Abreu</p>
    <p class="copyright__text">Desenhado & desenvolvido por Jadson Abreu</p>
</template>

<script>
    export default {
        components: {
      
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/__utils.scss';

    .copyright__text {
        margin-bottom: 0;
        color:$color-mute-white;
        text-transform: capitalize;
    }
</style>