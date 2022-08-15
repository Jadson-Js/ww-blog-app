<template>
  <div class="carousel-indicators">
    <button v-for="(value, key) in GET_SLIDE" :key="key" type="button"
      data-bs-target="#carouselExampleCaptions" :data-bs-slide-to="key" :class="isActive(key)" aria-current="true"
      :aria-label="'Slide ' + key"></button>
  </div>
  
</template>

<script>
  import {
    mapGetters
  } from 'vuex'

  export default {
    data() {
      return {}
    },
    computed: mapGetters(['GET_SLIDE']),
    methods: {
      isActive(key) {
        return key == 0 ? 'active' : ''
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>