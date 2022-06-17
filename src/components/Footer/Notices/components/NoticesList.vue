<template>
    <ul class="nav notices__list">
        <div class="row">
            <div class="col-4 notices__container">
                <li class="nav-item notices__item">
                    <router-link class="is-link notices__link" :to="{name: 'home'}">Home</router-link>
                </li>

                <li class="nav-item notices__item">
                    <router-link class="is-link notices__link" :to="{name: 'error'}">Esportes</router-link>
                </li>

                <li class="nav-item notices__item">
                    <router-link class="is-link notices__link" :to="{name: 'error'}">Economia</router-link>
                </li>
            </div>

            <div class="col-4 notices__container">
                <li class="nav-item notices__item">
                    <router-link class="is-link notices__link" :to="{name: 'home'}">Culinária</router-link>
                </li>

                <li class="nav-item notices__item">
                    <router-link class="is-link notices__link" :to="{name: 'error'}">Vagas</router-link>
                </li>

                <li class="nav-item notices__item">
                    <router-link class="is-link notices__link" :to="{name: 'error'}">Tempo</router-link>
                </li>
            </div>

            <div class="col-4 notices__container">
                <li class="nav-item notices__item">
                    <router-link class="is-link notices__link" :to="{name: 'home'}">Política</router-link>
                </li>

                <li class="nav-item notices__item">
                    <router-link class="is-link notices__link" :to="{name: 'error'}">Concursos</router-link>
                </li>

                <li class="nav-item notices__item">
                    <router-link class="is-link notices__link" :to="{name: 'error'}">Login</router-link>
                </li>
            </div>
        </div>
    </ul>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/__utils.scss';

    .notices__container {
        border-right: 1px solid $color-grey;

        &:last-of-type {
            border: none;
        }
    }

    .notices__link {
        color: $color-mute-white;
    }
</style>