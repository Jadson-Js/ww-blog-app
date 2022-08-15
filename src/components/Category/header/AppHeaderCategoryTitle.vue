<template>
  <header class="text-center mt-3 mb-3 p-2 l-header">
    <h1 class="is-categoryHeader m-0 p-0">{{ this.$route.params.category }}</h1>
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