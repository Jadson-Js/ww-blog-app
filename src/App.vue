<template>
  <AppNavbar />

  <router-view name="header"></router-view>

  <router-view name="main"></router-view>

  <AppFooter />
</template>

<script>
  import watchPath from '/src/mixins/watchPath.vue'

  import AppNavbar from './components/Navbar/AppNavbar.vue'
  import AppFooter from './components/Footer/AppFooter.vue'

  export default {
    name: 'App',
    mixins: [watchPath],
    components: {
      AppNavbar,
      AppFooter
    }
  }
</script>

<style lang="scss">
  @import 'normalize-scss';
  @include normalize();
  @import './assets/scss/state.scss';

  body {
    background: #ECF0F1 !important;
    font-family:
      Arial,
      sans-serif,
      system-ui,
      -apple-system,
      /* Firefox supports this but not yet `system-ui` */
      'Segoe UI',
      Roboto,
      Helvetica,
      Arial,
      sans-serif,
      'Apple Color Emoji',
      'Segoe UI Emoji' !important;
  }
</style>