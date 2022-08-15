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
  import NoticeCategory from './components/NoticeCategory.vue'
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