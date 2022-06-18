<template>
    <div class="col-12 col-md-8">
        <main class="mb-4 is-box">
            <p class="notice__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eius architecto illo obcaecati animi
                deleniti,
                dolorum cupiditate accusamus accusantium tempore illum laborum, unde vel quis expedita adipisci
                alias
                assumenda laudantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eius architecto
                illo obcaecati animi
                deleniti,
                dolorum cupiditate accusamus accusantium tempore illum laborum, unde vel quis expedita adipisci
                alias
                assumenda laudantium?
            </p>
            <p class="notice__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eius architecto illo obcaecati animi
                deleniti,
                dolorum cupiditate accusamus accusantium tempore illum laborum, unde vel quis expedita adipisci
                alias
                assumenda laudantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eius architecto
                illo obcaecati animi
                deleniti,
                dolorum cupiditate accusamus accusantium tempore illum laborum, unde vel quis expedita adipisci
                alias
                assumenda laudantium?
            </p>
            <p class="notice__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eius architecto illo obcaecati animi
                deleniti,
                dolorum cupiditate accusamus accusantium tempore illum laborum, unde vel quis expedita adipisci
                alias
                assumenda laudantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eius architecto
                illo obcaecati animi
                deleniti,
                dolorum cupiditate accusamus accusantium tempore illum laborum, unde vel quis expedita adipisci
                alias
                assumenda laudantium?
            </p>
        </main>
    </div>

    <AppMainNoticeMore />

    <AppMainHome />
</template>

<script>
    import { mapGetters } from 'vuex'

    import AppMainNoticeMore from './AppMainNoticeMore.vue'
    import AppMainHome from '../Home/AppMainHome.vue'

    export default {
        components: {
            AppMainNoticeMore,
            AppMainHome
        },
        computed: mapGetters(['GET_ARTICLE'])
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/__utils.scss';

    .is-box {
        background: #fff;
        text-transform: capitalize;
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