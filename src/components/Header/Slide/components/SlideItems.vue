<template>
  <ul class="carousel-inner slide__list">
    <li v-for="(value, key) in GET_SLIDE_NOTICES" :key="key" :class="['carousel-item', isActive(key) ]"
      data-bs-interval="4000">

      <img :src="'http://localhost:3000/uploads/notice-' + value.ImageId + '.jpg'" class="d-block slide__img">

      <div class="carousel-caption  d-md-block">
        <router-link class="h1 is-link slide__title"
          :to="{name: 'notice', params: {category: value.category.title, noticeId: value.id, noticeTitle: value.title}}">
          ID: {{ value.id }}
        </router-link>
      </div>
    </li>
  </ul>

</template>

<script>
  import {
    mapGetters
  } from 'vuex'

  export default {
    data() {
      return {
      }
    },
    computed: mapGetters(['GET_SLIDE_NOTICES']),
    methods: {
      isActive(key) {
        return key == 0 ? 'active' : ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/assets/scss/__utils.scss';

  .slide__list {
    margin: 0;
    padding: 0;
  }

  .slide__img {
    width: 100%;
    height: 40vh;
    background-size: cover;

  }

  .slide__title {
    text-align: left;
    color: $color-white;
    font-weight: 600;
  }

  @media (min-width: 762px) {
    .slide__img {
      height: 60vh;
    }
  }
</style>