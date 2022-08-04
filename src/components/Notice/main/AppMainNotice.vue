<template>
    <div class="col-12 col-md-8">
        <main class="mb-4 is-box">
            <p v-html="GET_ARTICLE.content" class="notice__text"></p>
        </main>
    </div>

    <AppMainNoticeMore />

    <AppMainFeed />
</template>

<script>
    import { mapGetters } from 'vuex'

    import AppMainNoticeMore from './AppMainNoticeMore.vue'
    import AppMainFeed from '../../Feed/main/AppMainFeed.vue'

    export default {
        components: {
            AppMainNoticeMore,
            AppMainFeed
        },
        computed: mapGetters(['GET_ARTICLE'])
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/__utils.scss';

    .is-box {
        background: #fff;
        padding: 2em;
    }

    .notice__text {
        font-size: 1.2em;
        font-weight: 400;
        color: $color-dark-light;
        line-height: 1.4em;
        margin-bottom: 2em;
    }

    @media (min-width: 762px) {
        .is-box {
            margin: auto 1em 0 1em;
        }
    }
</style>