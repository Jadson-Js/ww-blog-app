<template>
    <h2 class="h4">Páginas principais</h2>

    <nav class="mt-2">
        <NoticesList />
    </nav>
</template>

<script>
    import NoticesList from './components/NoticesList.vue'

    export default {
        components: {
            NoticesList
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/__utils.scss';

    .notices__link {
        color: $color-mute-white;
    }
</style>