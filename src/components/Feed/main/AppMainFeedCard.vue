<template>
    <section class="is-container__new l-post">
        <h2 class="h4">
            <router-link class="is-link post__title" :to="{name: 'category', params: {category: category}}">
                {{ category.title }}
                <font-awesome-icon icon="angle-right" class="title__icon" />
            </router-link>
        </h2>

        <FeedCardNotice v-for="(value, key) in notices" :key="key" :category="category" :notice="value" />
    </section>
</template>

<script>
    import FeedCardNotice from './Model/FeedCardNotice.vue'

    export default {
        data() {
            return {
                category: 'Aguarde...',
                notices: [],
            }
        },
        components: {
            FeedCardNotice
        },
        props: ['categoryId'],
        async mounted() {
            const categoryId = await this.categoryId

            const config = {
                id: categoryId,
                limit: 3
            } 

            await this.$store.dispatch('getNoticesByCategoryIdByApi', config)

            const categoryNotices = await this.$store.getters.GET_CATEGORY_NOTICES.find(el => el.id ==
                categoryId)

            this.category = categoryNotices.category
            this.notices = categoryNotices.notices
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/__utils.scss';

    .post__title {
        color: $color-dark-black;

        .title__icon {
            color: $color-red;
        }
    }

    @media (min-width: 768px) {
        .l-post {
            margin-bottom: 20em;

            &:last-of-type {
                margin-bottom: 0;
            }
        }
    }
</style>