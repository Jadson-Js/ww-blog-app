<template>
    <section class="is-container__new l-post">
        <router-link class="is-link post__title" :to="{name: 'category', params: {category: category}}">
            <h1 class="h4">
                {{ category }}<font-awesome-icon icon="angle-right" class="title__icon" />
            </h1>
        </router-link>

        <ColumnNotice 
            v-for="(value, key) in notices" :key="key"
            :category="category"
            :notice="value"
        /> 
    </section>
</template>

<script>
    import ColumnNotice from './Model/ColumnNotice.vue'

    export default {
        data() {
            return {
                category: 'Aguarde...',
                notices: []
            }
        },
        components: {
           ColumnNotice
        },
        props: ['categoryId'],
        async mounted() {
            await this.$store.dispatch('getNoticesByCategoryIdByApi', this.categoryId)

            const categoryNotices = this.$store.getters.GET_CATEGORY_NOTICES[this.categoryId]

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
        margin-bottom: 10em;
    
        &:last-of-type {
            margin-bottom: 0;
        }
    }
    }
</style>