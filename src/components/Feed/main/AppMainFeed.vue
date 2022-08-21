<template>
    <div class="container-fluid">
        <component :is="tagMain" class="row">
            <div class="col-12 col-md-8 home__articles">
                <FeedNotice v-for="(value, key) in GET_FEED" :key="key" :notice="value" />

                <MoreNotices />
            </div>

            <div class="col-12 col-md-4 home__posts">
                <AppMainFeedCard v-for="(value, key) in GET_GENERATION" :key="key" :categoryId="categoryIdPost()" />
            </div>
        </component>
    </div>
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
        computed: {
            ...mapGetters(['GET_FEED', 'GET_GENERATION']),
            tagMain() {
                return this.$route.name == 'home' || this.$route.name == 'category' ? 'main' : 'div'
            }
        },
        methods: {
            async categoryIdPost() {
                const generationFeed = this.$store.getters.GET_GENERATION

                const categories = await this.$store.getters.GET_CATEGORIES

                return await generationFeed <= categories.length ? categories[generationFeed - 1].id : categories[0].id
            }
        },
        mounted() {
            this.$watch('$route', (newRoute, oldRoute) => {
                if (newRoute.name == 'home' && oldRoute == '') {
                this.$store.commit('SET_RESET')

                const config = {
                    limit: 3,
                    offset: 3
                }

                this.$store.dispatch('getNoticesByApiToFeed', config)

                } else if (newRoute.name == 'category' && oldRoute.name == 'category' || newRoute.name == 'notice' && oldRoute.name == 'notice') {
                    this.$store.commit('SET_RESET')

                    const config = {
                        category: newRoute.params.category,
                        limit: 3,
                        offset: 0
                    }

                    this.$store.dispatch('getNoticesByApiToCategoryFeed', config)
                }
            })
        }
        
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/__utils.scss';

    .l-home {
        margin: 1.5em 0;
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