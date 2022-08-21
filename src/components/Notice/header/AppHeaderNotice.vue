<template>
  <header class="l-header">
      <div class="col-12">
        <NoticeCategory />
      </div>

      <div class="col-12 col-md-8">
        <NoticeHero />
      </div>
  </header>
</template>

<script>
  import NoticeCategory from '../../Category/header/AppHeaderCategoryTitle.vue'
  import NoticeHero from './components/NoticeHero.vue'

  export default {
    components: {
      NoticeCategory,
      NoticeHero
    }
  }
</script>

<style lang="scss" scoped>
</style>