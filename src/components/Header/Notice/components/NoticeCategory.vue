<template>
  <div class="text-center mt-2 p-2 is-box">
    <h1 class="is-categoryHeader">
      <router-link class="is-link notice__category" :to="{name: 'category', params: {category: this.$route.params.category}}">
        {{ this.$route.params.category }}
      </router-link>
    </h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
  }
</script>

<style lang="scss" scoped>
  @import 'src/assets/scss/__utils.scss';

  .is-box {
    background: #fff;
  }

  .notice__category {
    transition: all 0.3s ease;
    color: $color-dark-black;

    &:hover {
      color: $color-dark-red;
    }
  }
</style>