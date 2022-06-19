<template>
    <div class="container-fluid l-home">
        <div class="row">
            <!-- Para cada 14 noticias do DB, essa div sera repetida -->
            <div class="col-12 col-md-8 home__articles">
                <FeedNotice v-for="(value, key) in GET_FEED" :key="key" :notice="value" />
            </div>

            <div class="col-12 col-md-4 home__posts">
                <AppMainHomeColumn :categoryId="1" />
            </div>
        </div>

        {{ GET_GENERATION }}
        <button @click="moreNotices()">Mais notícias</button>
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'

    import FeedNotice from './Model/FeedNotice.vue'
    import AppMainHomeColumn from './AppMainHomeColumn.vue'

    export default {
        components: {
            FeedNotice,
            AppMainHomeColumn
        },
        computed: mapGetters(['GET_FEED', 'GET_GENERATION']),
        methods: {
            moreNotices() {
                this.$store.commit('SET_GENERATION')

                if (this.$route.params.category == undefined) {
                    const config = {
                        limit: 3,
                        offset: this.$store.getters.GET_GENERATION * 3
                    }

                    this.$store.dispatch('getNoticesByApiToFeed', config)
                } else {
                    const config = {
                        category: this.$route.params.category,
                        limit: 3,
                        offset: this.$store.getters.GET_GENERATION * 3
                    }

                    this.$store.dispatch('getNoticesByApiToCategoryFeed', config)
                }

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