<template>
  <div class="is-box">
    <h1 class="hero__title">
      {{ GET_ARTICLE.title }}
    </h1>

    <p class="mt-3 mb-4 hero__text">
      {{ GET_ARTICLE.description }}
    </p>

    <NoticeHeroImage />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import NoticeHeroImage from './NoticeHeroImage.vue'

  export default {
    components: {
      NoticeHeroImage
    },
    computed: mapGetters(['GET_ARTICLE']),
  }
</script>

<style lang="scss" scoped>
  @import 'src/assets/scss/__utils.scss';

  .is-box {
    background: #fff;
    padding: 2em 2em 0 2em;
  }

  .hero__title {
    font-weight: 600;
    color: $color-dark-black;
  }

  .hero__text {
    color: $color-dark-light;
    line-height: 1.2em;
    letter-spacing: 0.03em;
    font-size: 1.1em;
  }

  @media (min-width: 762px) {
    .is-box {
      margin: auto 1em 0 1em;
    }
  }
</style>