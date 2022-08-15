<template>
    <div class="d-none d-md-flex navbar__tab">
        <ul class="nav tab__list">
            <li class="nav-item tab__item">
                <router-link class="is-link nav-link" :to="{name: 'home'}">Home</router-link>
            </li>

            <li v-for="(value, key) in GET_CATEGORIES" :key="key" class="nav-item tab__item">
                <router-link class="is-link nav-link" :to="{name: 'category', params: {category: value.title}}">{{ value.title }}</router-link>
            </li>

            <div v-if="GET_IS_LOGGED" class="d-flex">
                <li class="nav-item tab__item">
                    <router-link class="is-link nav-link" :to="{name: 'profile'}">Perfil</router-link>
                </li>

                <li  class="nav-item tab__item">
                    <button @click="logout()" class="btn btn-sm btn-danger">Logout</button>  
                </li>
            </div>

            <li v-else class="nav-item tab__item">
                <router-link class="is-link nav-link" :to="{name: 'login'}">Login</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'

    export default {
        data() {
            return {}
        },
        computed: mapGetters(['GET_CATEGORIES', 'GET_IS_LOGGED']),
        methods: {
            async logout() {
                await this.$store.commit('SET_LOGOUT')
                this.$router.replace('/')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/__utils.scss';

    .navbar__tab {
        margin-right: 2em;
        overflow: auto;

        .tab__list {
            flex-wrap: nowrap;

            .tab__item {
                padding: 0;
                margin: auto .5em;

                a,
                span {
                    padding: 0;
                    color: $color-white;
                    white-space: nowrap;

                    &:hover {
                        color: $color-green-light;
                    }
                }

                .router-link-active {
                    color: $color-green-light;
                    border-bottom: 1px solid $color-green-light;
                }
            }
        }
    }
</style>