<template>
    <h2 class="h4">Contatos</h2>

    <address>
        <ul class="is-list contacts__list">
            <li class="contact__item">
                <font-awesome-icon class="contact__icon" icon="envelope" />
                <a class="is-link contact__link" href="mailto:jadson20051965@gmail.com">jadson20051965@gmail.com</a>
            </li>
            <li class="contact__item">
                <font-awesome-icon class="contact__icon" icon="phone" />
                <a class="is-link contact__link" href="tel:+559188907985">(+55) 989 8350-7939</a>
            </li>
            <li class="contact__item">
                <font-awesome-icon class="contact__icon" icon="location-dot" /> 
                <span class="contact__link" >Brasil - Maranão - São Luís</span>
            </li>
        </ul>
    </address>
</template>

<script>
    export default {
        components: {}
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/__utils.scss';

    .contact__link {
        color: $color-mute-white;  
    }

    .contact__item {
        margin-bottom: .5em;

        &:last-of-type {
            margin-bottom: 0;
        }

        .contact__icon {
            margin-right: .5em;
            font-size: 1.5em;
            width: 1em;
            color: $color-green-light;
        }
    }
</style>