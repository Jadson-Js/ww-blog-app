<template>
    <nav class="container-fluid navbar navbar-expand-lg  d-flex flex-nowrap align-items-center  justify-content-center justify-content-md-between l-navbar">
        <NavbarLogo />
        
        <NavbarToggle />
        
        <NavbarTab />
    </nav>
</template>

<script>
    import NavbarLogo from './components/NavbarLogo.vue'
    import NavbarToggle from './components/NavbarToggle.vue'
    import NavbarTab from './components/NavbarTab.vue'

    export default {
        data() {
            return {
            }
        },
        components: {
            NavbarLogo,
            NavbarToggle,
            NavbarTab
        },
        mounted () {
            this.$store.dispatch('getCategoriesByApi')
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/__utils.scss';

    .l-navbar {
        background-color: $color-dark-light;
        height: 3em;
    }
</style>