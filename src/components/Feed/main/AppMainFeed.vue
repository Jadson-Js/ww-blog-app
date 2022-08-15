<template>
    <main class="container-fluid l-home">
        <div class="row">
            <!-- Para cada 14 noticias do DB, essa div sera repetida -->
            <div class="col-12 col-md-8 home__articles">
                <FeedNotice v-for="(value, key) in GET_FEED" :key="key" :notice="value" />

                <MoreNotices />
            </div>

            <div class="col-12 col-md-4 home__posts">
                <AppMainFeedCard v-for="(value, key) in GET_GENERATION" :key="key" :categoryId="categoryIdPost()" />
            </div>
        </div>
    </main>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'

    import FeedNotice from './Model/FeedNotice.vue'
    import AppMainFeedCard from './AppMainFeedCard.vue'
    import MoreNotices from './components/MoreNotices.vue'

    export default {
        components: {
            FeedNotice,
            AppMainFeedCard,
            MoreNotices
        },
        data() {
            return {}
        },
        computed: {
            ...mapGetters(['GET_FEED', 'GET_GENERATION'])
        },
        methods: {
            async categoryIdPost() {
                const generationFeed = this.$store.getters.GET_GENERATION

                await this.$store.dispatch('getCategoriesByApi')

                const categories = this.$store.getters.GET_CATEGORIES

                return await generationFeed <= categories.length ? categories[generationFeed - 1].id : 1
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/__utils.scss';

    .l-home {
        margin: 1.5em auto;
    }

    .home__articles,
    .home__posts {
        margin: 0;
        padding: 0 auto;
    }

    @media (min-width: 768px) {
        .l-home {
            margin: 1.5em auto;
        }
    }
</style>