<template>
  <router-view name="head"></router-view>

  <AppNavbar />

  <router-view name="header"></router-view>

  <router-view name="main"></router-view>

  <AppFooter />
</template>

<script>
  import AppNavbar from './components/Navbar/AppNavbar.vue'
  import AppFooter from './components/Footer/AppFooter.vue'
  import watchRoute from './mixins/watchRoute.vue'

  export default {
    name: 'App',
    components: {
      AppNavbar,
      AppFooter
    },
    mixins: [watchRoute]
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