<template>
    <footer class="d-flex flex-wrap justify-content-around  l-footer">
        <section class="footer__container">
            <FooterNotices />
        </section>

        <section class="footer__container l-contact">
            <!-- Aplique semantica para area de contatos -->
            <FooterContacts />
        </section>

        <section class="d-flex flex-column align-items-center text-center footer__container">
            <FooterCopyright />
            <FooterMidia />
        </section>
    </footer>
</template>


<script>
    import FooterNotices from './Notices/AppFooterNotices.vue'
    import FooterContacts from './Contacts/AppFooterContacts.vue'
    import FooterCopyright from './Copyright/AppFooterCopyright.vue'
    import FooterMidia from './Midia/AppFooterMidia.vue'

    export default {
        components: {
            FooterNotices,
            FooterContacts,
            FooterCopyright,
            FooterMidia
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/__utils.scss';

    .l-footer {
        margin: 0;
        padding: 2em 1em;
        background-color: $color-dark-light;
        color: $color-white;
    }

    .footer__container {
        width: 18em;
        margin: 0 .5em 2em;
        font-size: 1.1em;

        &:last-of-type {
            margin-bottom: 0;
        }
    }

    @media (min-width: 665px) { 
        .footer__container {
            width: auto;
        }
    }

    @media (min-width: 881px) {
        .footer__container {
            margin: 0;
        }
    }
</style>