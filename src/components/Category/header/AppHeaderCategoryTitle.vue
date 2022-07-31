<template>
  <header class="text-center mt-2 p-2 l-header">
    <h1 class="is-categoryHeader">{{ this.$route.params.category }}</h1>
  </header>
</template>

<script>
  export default {
    data() {
      return {}
    },
    components: {},
  }
</script>

<style lang="scss" scoped>
  @import 'src/assets/scss/__utils.scss';

  .l-header {
    background: #fff;
  }
</style>