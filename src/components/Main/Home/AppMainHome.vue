<template>
    <div class="container-fluid l-home">
        <div v-for="containerNumber in manyContainers()" :key="containerNumber" class="row"> <!-- Para cada 14 noticias do DB, essa div sera repetida -->
            <div class="col-12 col-md-8 home__articles">
                <FeedNotice 
                    v-for="(value, key) in GET_FEED_NOTICES.slice((containerNumber - 1) * 3, containerNumber * 3)" :key="key" 
                    :notice="value"
                />
            </div>

            <div class="col-12 col-md-4 home__posts">
                <AppMainHomeColumn
                    :categoryId="containerNumber"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    import FeedNotice from './Model/FeedNotice.vue'
    import AppMainHomeColumn from './AppMainHomeColumn.vue'

    export default {
        components: {
            FeedNotice,
            AppMainHomeColumn
        },
        computed: mapGetters(['GET_FEED_NOTICES']),
        methods: {
            manyContainers() {
                const totalNotices = this.$store.getters.GET_FEED_NOTICES.length
                const manyContainers = Math.floor(totalNotices / 6)

                return manyContainers
            },
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