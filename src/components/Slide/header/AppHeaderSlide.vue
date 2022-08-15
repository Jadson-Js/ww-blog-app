<template>
  <header id="carouselExampleDark" class="carousel slide l-slide" data-bs-ride="carousel">
    <SlideIndicators />
    
    <SlideItems />
    
    <SlideButtons />
  </header>
</template>

<script>
  import SlideIndicators from './components/SlideIndicators.vue'
  import SlideItems from './components/SlideItems.vue'
  import SlideButtons from './components/SlideButtons.vue'

  export default {
    data() {
      return {
      }
    },
    components: {
      SlideIndicators,
      SlideItems,
      SlideButtons
    },
    mounted () {
      const config = {
        limit: 3,
        offset: 0
      } 

      this.$store.dispatch('getNoticesByApiToSlide', config)
    }
  }
</script>

<style lang="scss" scoped>
    .l-slide {
      margin: .5em auto;
      width: 100%;
      overflow:hidden;
    }
</style>